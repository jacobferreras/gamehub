import { Router } from "express";
import homeController from "../../controllers/homeController/homeController.js";

const router = Router();

router.get("/", homeController.getAll);

export default router;
