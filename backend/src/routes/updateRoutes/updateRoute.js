import { Router } from "express";
import updateController from "../../controllers/updateController/updateController.js";

const route = Router();

route.post("/", updateController.update);

export default route;
