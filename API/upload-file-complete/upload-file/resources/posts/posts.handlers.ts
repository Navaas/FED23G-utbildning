import { Request, Response } from "express";
import { PostModel } from "./posts.model";

export const getPost = async (req: Request, res: Response) => {
  const post = await PostModel.findById(req.params.id);
  res.status(200).json(post);
};

export const addPost = async (req: Request, res: Response) => {
  const post = await PostModel.create(req.body);
  res.status(201).json(post);
};
