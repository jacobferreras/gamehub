import { Router } from "express";
import homeController from "../../controllers/proPlayerController/proPlayerController.js";

const router = Router();

router.get("/", homeController.getAll);

export default router;
