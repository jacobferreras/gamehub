import { Router } from "express";
import matchResultController from "../../controllers/matchResultController/matchResultController.js";

const router = Router();

router.get("/", matchResultController.getMatchResults);

export default router;
