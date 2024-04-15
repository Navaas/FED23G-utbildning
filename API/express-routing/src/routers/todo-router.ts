import express from "express";

const todoRouter = express.Router();

todoRouter.get("/", (req, res) => {
  res.status(200).json("GET ALL TODOS");
});

todoRouter.get("/:id", (req, res) => {
  res.status(200).json("GET A TODOS");
});

todoRouter.post("/", (req, res) => {
  res.status(200).json("CREATE A TODOS");
});

todoRouter.put("/:id", (req, res) => {
  res.status(200).json("UPDATE A TODOS");
});

todoRouter.delete("/:id", (req, res) => {
  res.status(200).json("DELETE A TODOS");
});

export default todoRouter;
