"use server";
import { db } from "@/prisma/db";
import { PostCreate } from "../ui/PostForm";

export async function savePost(incomingData: PostCreate) {
  try {
    const post = await db.post.create({
      data: {
        title: incomingData.title,
        content: incomingData.content,
        image: incomingData.image || "",
        postDate: new Date(),
      },
    });
    return post;
  } catch (error) {
    console.error("Error saving post:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}
