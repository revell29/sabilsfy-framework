import { config } from "https://deno.land/x/dotenv/mod.ts";
import { App } from "./Core/_module.ts";
import router from "../../../routes/router.ts";

export default async function server() {
  const app = new App();
  const PORT = parseInt(config().APP_PORT) || 5100;
  app.use(router);
  console.log("Start listening on http://localhost:5100");
  app.listen({ port: PORT });
}
