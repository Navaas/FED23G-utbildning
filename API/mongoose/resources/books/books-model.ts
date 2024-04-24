import mongoose, { SchemaTypes, type InferSchemaType } from "mongoose";

/* Schema för en bok, beskriver hur en bok ser ut */
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: SchemaTypes.ObjectId, require: true },
  isbn: { type: String, require: true },
  publishedDate: { type: Date, require: true },
  createdAt: { type: Date, default: new Date() },
});

export type Book = InferSchemaType<typeof BookSchema>;
export const BookModel = mongoose.model("Book", BookSchema);

/* Allt detta är grunden för att prata med (mongodb) databasen */
/* Model är en instans som gör att vi kan kommunicera med en collection i databasen */
