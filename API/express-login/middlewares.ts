import { NextFunction, Request, Response } from "express";

export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session?.email) {
    res.status(401).json("Du är inte inloggad");
    return;
  }
  next();
};
