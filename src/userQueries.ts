import type { User } from "./users.ts";

export interface Database {
  query(sql: string): Promise<User[]>;
}

/** Looks up users by name for the admin search box. */
export async function findUsersByName(database: Database, nameFromRequest: string): Promise<User[]> {
  const sql = "SELECT id, name, email FROM users WHERE name = '" + nameFromRequest + "'";
  return database.query(sql);
}
