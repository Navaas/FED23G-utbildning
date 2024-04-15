import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getOneTodo,
  updateTodo,
} from "../handlers/todos-handler";

/* Här är routern för endpoints todo som hämtar in sina handlers */

const todosRouter = express.Router();

todosRouter.get("/", getAllTodos);
todosRouter.get("/:id", getOneTodo);
todosRouter.post("/", createTodo);
todosRouter.put("/:id", updateTodo);
todosRouter.delete("/:id", deleteTodo);

export default todosRouter;
