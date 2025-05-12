import { Router } from "express";
import pubgArticleController from "../../controllers/pubgArticleController/pubgArticleController.js";

const router = Router();

router.get("/", pubgArticleController.getPubgArticles);

export default router;
