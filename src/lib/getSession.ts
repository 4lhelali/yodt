import { auth } from "@/server/auth/auth";
import { cache } from "react";

export default cache(auth);
