import { config } from "https://deno.land/x/dotenv/mod.ts";

interface mongo {
  hostname: String;
  username: String;
  db: String;
  password: String;
  port: Number;
}

/**
 *  Driver for connection mongo
 */
export const Mongo: mongo = {
  hostname: config().DB_HOST || "mongodb://localhost",
  username: config().DB_USER, //optional
  db: config().DB_NAME || "deno_demo",
  password: config().DB_PASS, //optional
  port: parseInt(config().DB_PORT) || 27017,
};

export const Connection = config().DB_CONNECTION;
