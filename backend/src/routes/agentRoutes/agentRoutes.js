import { Router } from "express";
import agentController from "../../controllers/agentController/agentController.js";

const router = Router();

router.get("/", agentController.getAllAgents);
router.get("/:id", agentController.getAgentById);

export default router;
