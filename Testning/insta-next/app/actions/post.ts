"use server";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
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
    revalidatePath("/");
    return post;
  } catch (error) {
    console.error("Error saving post:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}

export async function deletePost(id: string) {
  try {
    await db.post.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}
