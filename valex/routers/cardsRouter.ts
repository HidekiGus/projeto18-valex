import { Router } from "express";
import { createCard } from "../controllers/cardsController.js";
import validateSchema from "../middlewares/validateSchema.js";
import validateXApiKey from "../middlewares/validateXApiKey.js";
import newCardSchema from "../schemas/newCardSchema.js";

const cardsRouter = Router();

cardsRouter.post("/cards/create", validateXApiKey, validateSchema(newCardSchema), createCard);

export default cardsRouter;