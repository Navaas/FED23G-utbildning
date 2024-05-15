"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { PostCreate } from "../validation/post";

export async function savePost(postData: PostCreate) {
  const post = await db.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      authorId: 1,
    },
  });
  revalidatePath("/"); /* Refreshar sidan/ bygger om sidan */
}
