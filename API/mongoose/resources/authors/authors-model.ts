import mongoose, { type InferSchemaType } from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: { type: String, require: true },
  dateOfBirth: { type: Number, require: true },
});

export type Author = InferSchemaType<typeof AuthorSchema>;
export const AuthorModel = mongoose.model("Author", AuthorSchema);
