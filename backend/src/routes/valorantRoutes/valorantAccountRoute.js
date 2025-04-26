import { Router } from "express";
import valorantAccountController from "../controllers/valorantAccountController.js";

const router = Router();

router.get("/:id", valorantAccountController.getValorantAccountById);
router.get("/", valorantAccountController.getAllValorantAccounts);
router.post("/", valorantAccountController.addValorantAccountById);
router.patch("/:id", valorantAccountController.updateValorantAccountById);
router.delete("/:id", valorantAccountController.deleteValorantAccountById);

export default router;
