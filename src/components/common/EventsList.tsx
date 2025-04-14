import { db } from "@/server/db";
import EventCard from "./EventCard";
import { events } from "@/server/db/schema";
import { asc } from "drizzle-orm";

const EventsList = async () => {
  const recentEvents = await db
    .select()
    .from(events)
    .orderBy(asc(events.date))
    .limit(3);

  return (
    <section className="mx-auto max-w-7xl py-12">
      <div className="mb-8 text-center">
      <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          <span className="relative inline-block after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-16 after:-translate-x-1/2 after:content-['']">
            Events
          </span>
        </h2>
        <div className="mx-auto h-1 w-24 bg-primary"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
        {recentEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
};

export default EventsList;
