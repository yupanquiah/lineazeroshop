import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "@/db/schemas/index.ts";

export const db = drizzle(process.env.DATABASE_URL as string, { schema });
