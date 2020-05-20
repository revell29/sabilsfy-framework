import { Mongo, Connection } from "../../../../config/database.ts";
import { MongoClient, init, Database } from "../Core/_module.ts";

/**
 * Mongo connection
 */
export async function connectMongo(Mongo: any): Promise<Database> {
  await init();

  const client = new MongoClient();
  client.connectWithUri(`${Mongo.hostname}:${Mongo.port}`);
  const db = client.database(`${Mongo.db}`);

  return db;
}

/**
   *  default selected driver 
   * 
   * @param Connection 
   */
async function driver(Connection: string): Promise<any> {
  if (Connection === "mongo") {
    return await connectMongo(Mongo);
  }
}

export const database = await driver(Connection);
