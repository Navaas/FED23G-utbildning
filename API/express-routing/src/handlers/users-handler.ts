import { Request, Response } from "express";

/* Här hanteras koden */
export const getUser = (req: Request, res: Response) => {
  res.status(200).json("GET ONE USER");
};

export const registerUser = (req: Request, res: Response) => {
  res.status(200).json("REG USER");
};

export const loginUser = (req: Request, res: Response) => {
  res.status(200).json("LOGIN USER");
};

export const updateUser = (req: Request, res: Response) => {
  res.status(200).json("UPDATE A USER");
};

export const deleteUser = (req: Request, res: Response) => {
  res.status(200).json("DELETE A USER");
};
