import { Router } from "express";
import dotaArticleController from "../../controllers/dotaArticleController/dotaArticleController.js";

const router = Router();

router.get("/", dotaArticleController.getDotaArticles);

export default router;
