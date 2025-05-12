import { Router } from "express";
import pubgScheduleController from "../../controllers/pubgScheduleController/pubgScheduleController.js";

const router = Router();

router.get("/", pubgScheduleController.getPubgSchedule);

export default router;
