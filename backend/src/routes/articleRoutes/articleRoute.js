import { Router } from "express";
import articleController from "../../controllers/articleController/articleController.js";

const router = Router();
router.get("/", articleController.getAll);

export default router;
