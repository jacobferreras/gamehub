import { Router } from "express";
import upcomingGameController from "../../controllers/upcomingGameController/upcomingGameController.js";

const router = Router();

router.get("/", upcomingGameController.getAll);

export default router;
