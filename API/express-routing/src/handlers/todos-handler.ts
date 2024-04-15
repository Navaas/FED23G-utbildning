import { Request, Response } from "express";

interface Todo {
  id: string;
  title: string;
  details: string;
}
// Temporär databas till en databas implementeras.
let todos: Todo[] = [];

/* Här hanteras koden */
export const getAllTodos = (req: Request, res: Response) => {
  res.status(200).json(todos);
};

export const getOneTodo = (req: Request, res: Response) => {
  const todo = todos.find((t) => t.id === req.params.id);
  res.status(200).json(todo);
};

export const createTodo = (req: Request, res: Response) => {
  const todo = {
    id: Date.now().toString(),
    ...req.body,
  };
  todos.push(todo);
  res.status(201).json(todo);
};

export const updateTodo = (req: Request, res: Response) => {
  res.status(200).json("UPDATE A TODOS");
};

export const deleteTodo = (req: Request, res: Response) => {
  todos = todos.filter((t) => t.id !== req.params.id);
  res.status(200).json(null);
};
