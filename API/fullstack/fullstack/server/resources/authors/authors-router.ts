import express from "express";
import { createAuthor, getAuthors } from "./authors-handlers";

export const authorRouter = express.Router();

authorRouter.get("/", getAuthors);
authorRouter.post("/", createAuthor);
