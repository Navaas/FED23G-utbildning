import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  if (err instanceof ZodError) {
    res.status(404).json(err.stack);
    return;
  }

  if (err instanceof Error) {
    // Kan vara bra att sanera svaret i produktion - process-env.NODE_ENV
    res.status(500).json(err.stack);
    return;
  }
  res.status(500).json("Ett oväntat fel har uppstått");
};
