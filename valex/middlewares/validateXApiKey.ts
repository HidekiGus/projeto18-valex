import { Request, Response, NextFunction } from "express";
import { findByApiKey } from "../repositories/companyRepository.js";

export default function validateXApiKey(req: Request, res: Response, next: NextFunction) {
  if (!req.headers["x-api-key"]) {
    return res.sendStatus(422);
  }



  next();
}