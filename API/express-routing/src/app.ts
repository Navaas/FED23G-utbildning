import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Välkommen till mitt api");
});

app.listen(3500),
  () => {
    console.log("Server running on http://localhost:3500");
  };
