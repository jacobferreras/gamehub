import { Router } from "express";
import updateController from "../../controllers/updateController/updateController.js";

const route = Router();

route.get("/", updateController.getAllUpdates);

export default route;
