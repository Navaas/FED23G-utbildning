import type { Request, Response } from "express";
import { BookModel } from "./books-model";

/* Här hämtas Bookmodel/BookSchema från databasen för att skriva ut alla böcker i databasen */
export async function getBooks(req: Request, res: Response) {
  const books = await BookModel.find({});
  res.status(200).json(books);
}

export async function createBook(req: Request, res: Response) {
  const book = await BookModel.create(req.body);
  res.status(201).json(book);
}
