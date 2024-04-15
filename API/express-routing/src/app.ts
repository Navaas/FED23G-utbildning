import express from "express";
require("express-async-errors"); /* Låter oss skriva handlers async */

import { errorHandler } from "./handlers/error-handler";
import todoRouter from "./routers/todos-router";
import usersRouter from "./routers/users-router";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Välkommen till mitt api");
});

app.use(express.json());
app.use("/api/todos", todoRouter);
app.use("/api/users", usersRouter);

app.use("*", (req, res) => {
  res.status(404).json("Resursen verkar inte finnas...");
});

/* Felhanteraren */
app.use(errorHandler);

/* Vilken port lyssnar applikationen på */
app.listen(3500),
  () => {
    console.log("Server running on http://localhost:3500");
  };
