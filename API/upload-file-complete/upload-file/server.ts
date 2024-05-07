import express from "express";
import mongoose from "mongoose";
import { getImage, uploadImage } from "./resources/images/images-handlers";
import { addPost, getPost } from "./resources/posts/posts.handlers";

const app = express();
app.use(express.json());

app.get("/api/images/:id", getImage);
app.post("/api/images", uploadImage);

app.get("/api/posts/:id", getPost);
app.post("/api/posts", addPost);

async function run() {
  await mongoose.connect("mongodb://localhost:27017/image-upload");
  app.listen(6400, () => console.log("Server is running on port 6400"));
}
run();
