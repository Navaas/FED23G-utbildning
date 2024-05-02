import express from "express";
import { createAuthors, getAuthors } from "./author-handlers";

export const authorRouter = express.Router();

authorRouter.get("/", getAuthors);
authorRouter.post("/", createAuthors);
