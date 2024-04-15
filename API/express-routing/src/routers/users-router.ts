import express from "express";

const usersRouter = express.Router();

usersRouter.get("/:id", (req, res) => {
  res.status(200).json("GET ONE USER");
}); /* Hämta sig själva */

usersRouter.post("/register", (req, res) => {
  res.status(200).json("REGISTER ONE USER");
}); /* Registrera sig */

usersRouter.post("/login", (req, res) => {
  res.status(200).json("LOGIN USER");
}); /* Logga in sig */

usersRouter.put("/:id", (req, res) => {
  res.status(200).json("UPDATE USER");
}); /* Uppdatera sin profil */

usersRouter.delete("/:id", (req, res) => {
  res.status(200).json("DELETE ONE USER");
}); /* Ta bort kontot */
