import NextAuth from "next-auth";

import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "../db";

import Google from "next-auth/providers/google";
import { eq } from "drizzle-orm";
import { users } from "../db/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  callbacks: {
    async session({ session }) {
      if (session.user?.email) {
        const dbUser = await db.query.users.findFirst({
          where: eq(users.email, session.user.email),
          columns: {
            role: true,
          },
        });

        if (dbUser) {
          session.user.role = dbUser.role;
        }
      }
      return session;
    },
  },
  providers: [Google],
});
