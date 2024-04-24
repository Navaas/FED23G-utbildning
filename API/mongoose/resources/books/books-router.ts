import express from "express";
import { createBook, getBooks } from "./books-handlers";

export const booksRouter = express.Router();

booksRouter.get("/", getBooks);
booksRouter.post("/", createBook);
