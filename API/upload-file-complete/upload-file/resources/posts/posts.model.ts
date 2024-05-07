import { Schema, SchemaTypes, model } from "mongoose";

const PostSchema = new Schema(
  {
    text: { type: String, required: true },
    imageId: { type: SchemaTypes.ObjectId, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

PostSchema.virtual("imageUrl").get(function () {
  return "/api/images/" + this.imageId;
});

// <img src={"/api/images/" + post.imageId} />
// <img src={post.imageUrl} />

export const PostModel = model("Post", PostSchema);
