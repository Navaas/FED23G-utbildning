import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { booksRouter } from "./resources/books/books-router";

const app = express();

/* Skapa ett unikt objectid */
// const result = new Types.ObjectId();
// console.log(result);

app.use(express.json());
app.use("/api/books", booksRouter);
// app.use(authorRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(500).json("Ett oväntat fel har uppstått");
});
/* Ska ligga i server.ts i inlämnings-kodbasen */
main().catch((error) => console.error(error));

/* ANSLUT TILL DATABASEN OCH STARTA SERVERN */
async function main() {
  await mongoose.connect(process.env.MONGO_URI!);
  app.listen(4400, () => console.log("http://localhost:4400"));
}
