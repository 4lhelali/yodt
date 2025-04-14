import "@auth/core/adapters";
import type { DefaultSession } from "next-auth";

import type { roleEnum } from "@/server/db/schema";

declare module "@auth/core/adapters" {
  interface AdapterUser {
    role: roleEnum;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: roleEnum;
    } & DefaultSession["user"];
  }
}
