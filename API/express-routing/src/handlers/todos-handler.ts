import { Request, Response } from "express";

/* Här hanteras koden */
export const getAllTodos = (req: Request, res: Response) => {
  res.status(200).json("GET ALL TODOS");
};

export const getOneTodo = (req: Request, res: Response) => {
  res.status(200).json("GET A TODOS");
};

export const createTodo = (req: Request, res: Response) => {
  res.status(200).json("CREATE A TODOS");
};

export const updateTodo = (req: Request, res: Response) => {
  res.status(200).json("UPDATE A TODOS");
};

export const deleteTodo = (req: Request, res: Response) => {
  res.status(200).json("DELETE A TODOS");
};
