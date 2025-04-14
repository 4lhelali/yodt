import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  coverImage: z.string().optional(),
  content: z.string().min(10, {
    message: "Content must be at least 10 characters.",
  }),
});

export const eventSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  date: z
    .union([
      z.date(),
      z.string().refine((date) => !isNaN(new Date(date).getTime()), {
        message: "Please enter a valid date",
      }),
    ])
    .transform((val) => {
      if (val instanceof Date) return val;
      return new Date(val);
    }),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
    message: "Please enter a valid time in HH:MM format.",
  }),
  location: z.string().min(2, {
    message: "Location must be at least 2 characters.",
  }),
});


