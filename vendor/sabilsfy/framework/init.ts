import { config } from "https://deno.land/x/dotenv/mod.ts";
import { App, logger } from "./Core/_module.ts";
import router from "../../../routes/router.ts";

/**
 * Sabilsfy - A Deno Framework for Web Artisan
 *
 * 
 * Don't touch anything in here,
 * @package  Sabilsfy
 * @author   Revell29 <diraapsya0@gmail.com>
 */
export default async function server(): Promise<void> {
  const app = new App();
  const PORT = parseInt(config().APP_PORT) || 5100;
  app.use(logger);
  app.use(router);

  app.use("*", (req, res) => {
    res.send("not found");
  });
  console.log(`Start listening on http://localhost:${PORT}`);
  await app.listen({ port: PORT });
}
