import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { PostCreate, postSchema } from "../ui/PostForm";

export async function savePost(incomingData: PostCreate) {
  const postData = postSchema.parse(incomingData);

  const post = await db.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      image:
        postData.image ||
        "" /* Om det inte finns någon bild, sätt en tom sträng. */,
      postDate: new Date(),
    },
  });
  revalidatePath("/"); /* Refreshar sidan/ bygger om den sidan du står på. */
}
