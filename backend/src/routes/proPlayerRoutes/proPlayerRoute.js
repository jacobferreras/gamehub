import { Router } from "express";
import proplayerController from "../../controllers/proPlayerController/proPlayerController.js";

const router = Router();

router.get("/", proplayerController.getAll);
router.get("/ign/:ign", proplayerController.getProPlayerByIGN);
router.get("/:id", proplayerController.getProPlayerById);

export default router;
