import { Request, Response, NextFunction } from "express";

export default function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  
  if (error.type === "NotFound") {
    return res.status(404).send({ message: error.message });
  }


  res.status(500).send({ message: error.message });
}