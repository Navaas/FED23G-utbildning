import express from "express";
import todoRouter from "./routers/todos-router";
import usersRouter from "./routers/users-router";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Välkommen till mitt api");
});

app.use(express.json());

app.use("/api/todos", todoRouter);
app.use("/api/users", usersRouter);
// app.use("/api/users", todoRouter);
// app.use("/api/history", todoRouter);
// app.use("/api/calendar", todoRouter);

app.listen(3500),
  () => {
    console.log("Server running on http://localhost:3500");
  };
