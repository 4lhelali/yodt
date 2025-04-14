"use server";

import { createEventSlug } from "@/lib/createSlug";
import getSession from "@/lib/getSession";
import { db } from "@/server/db";
import { events } from "@/server/db/schema";
import { redirect } from "next/navigation";
import { eventSchema } from "schema";
import { eq } from "drizzle-orm";


// creating Event
export const createEvent = async (formData: FormData) => {
  const session = await getSession();
  const user = session?.user;

  if (!session || !user) {
    redirect("/login");
  }

  const eventFormData = Object.fromEntries(formData.entries());
  const validatedFormData = eventSchema.safeParse(eventFormData);

  if (!validatedFormData.success) {
    return {
      success: false,
      message: "Something went wrong!",
    };
  }

  const { title, description, date, time, location } = validatedFormData.data;
  try {
    const slug = await createEventSlug(title);
    const event = {
      ...validatedFormData.data,
      userId: user.id,
      slug,
    };

    await db.insert(events).values(event);

    return {
      success: true,
      data: {
        title,
        description,
        date,
        time,
        location,
      },
    };
  } catch (error) {
    console.log("Error creating event", error);
    return {
      error: {
        title: "An error occurred while creating the event.",
      },
    };
  }
};












export const deleteEvent = async (eventId: string) => {
  try {
    await db.delete(events).where(eq(events.id, eventId));
    return { success: true };
  } catch (error) {
    console.error("Error deleting event:", error);
    return { success: false, message: "Failed to delete post" };
  }
};

