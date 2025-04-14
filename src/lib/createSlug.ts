import { db } from "@/server/db";
import { events, posts } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import slugify from "slugify";


// creating single Post
export const createPostSlug = async (title: string) => {
  const slug = slugify(title, {
    lower: true,
    strict: true,
    locale: "ar",
    trim: true,
    replacement: "-",
  });

  let counter = 0;
  let uniqueSlug = slug;

  while (true) {
    const existingBlog = await db
      .select()
      .from(posts)
      .where(eq(posts.slug, uniqueSlug))
      .limit(1);

    if (!existingBlog.length) {
      return uniqueSlug;
    }

    counter++;
    uniqueSlug = `${slug}-${counter}`;
  }
};



// creating Single Event
export const createEventSlug = async (title: string) => {
  const slug = slugify(title, {
    lower: true,
    strict: true,
    locale: "ar",
    trim: true,
    replacement: "-",
  });

  let counter = 0;
  let uniqueSlug = slug;

  while (true) {
    const existingBlog = await db
      .select()
      .from(events)
      .where(eq(events.slug, uniqueSlug))
      .limit(1);

    if (!existingBlog.length) {
      return uniqueSlug;
    }

    counter++;
    uniqueSlug = `${slug}-${counter}`;
  }
};
