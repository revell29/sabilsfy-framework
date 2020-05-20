import { Router } from "../vendor/sabilsfy/framework/Core/_module.ts";
import { View } from "../vendor/sabilsfy/framework/Views/view.ts";
const router = new Router();

router.get("/", async (req, res) => {
  return res.send(await View("welcome"));
});

export default router;
