import { Request, Response } from "express";
import * as cardServices from "../services/cardServices.js";

export async function createCard(req: Request, res: Response) {
  const { employeeId, cardType } = req.body;
  const apiKey = req.headers["x-api-key"].toString();
  await cardServices.createCardService(employeeId, cardType, apiKey);

  return res.sendStatus(201);
}