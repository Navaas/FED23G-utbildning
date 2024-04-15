import express from "express";
import {
  deleteUser,
  getUser,
  loginUser,
  registerUser,
  updateUser,
} from "../handlers/users-handler";

const usersRouter = express.Router();

usersRouter.get("/:id", getUser); /* Hämta sig själva */
usersRouter.post("/register", registerUser); /* Registrera sig */
usersRouter.post("/login", loginUser); /* Logga in sig */
usersRouter.put("/:id", updateUser); /* Uppdatera sin profil */
usersRouter.delete("/:id", deleteUser); /* Ta bort kontot */

export default usersRouter;
