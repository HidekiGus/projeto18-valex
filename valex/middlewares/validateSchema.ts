import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export default function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {error} = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.sendStatus(422);
    }

    next();
  }
}