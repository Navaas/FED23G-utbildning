import express from "express";

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.status(200).json("GET ALL TODOS");
});

todosRouter.get("/:id", (req, res) => {
  res.status(200).json("GET A TODOS");
});

todosRouter.post("/", (req, res) => {
  res.status(200).json("CREATE A TODOS");
});

todosRouter.put("/:id", (req, res) => {
  res.status(200).json("UPDATE A TODOS");
});

todosRouter.delete("/:id", (req, res) => {
  res.status(200).json("DELETE A TODOS");
});

export default todosRouter;
