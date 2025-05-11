import { Router } from "express";
import gameHighlightsController from "../../controllers/gameHighlightsController/gameHighlightsController.js";

const router = Router();
router.get("/", gameHighlightsController.getAll);

export default router;
