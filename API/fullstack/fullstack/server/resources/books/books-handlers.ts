import type { Request, Response } from "express";
import { BookModel } from "./books-model";

export async function getBooks(req: Request, res: Response) {
  const books = await BookModel.find({}).populate("author", "name");
  res.status(200).json(books);
}

export async function createBook(req: Request, res: Response) {
  const book = await BookModel.create(req.body);
  res.status(201).json(book);
}
