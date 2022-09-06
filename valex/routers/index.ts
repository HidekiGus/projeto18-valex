import { Router } from "express";
import cors from "cors";
import cardsRouter from "./cardsRouter.js";

const router = Router();

router.use(cardsRouter);

export default router;