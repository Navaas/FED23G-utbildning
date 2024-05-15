"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function savePost(formData: FormData) {
  console.log("savePost", formData.get("title"));
  const title = formData.get("title")?.toString() || "Default title";
  const content = formData.get("content")?.toString();

  const post = await db.post.create({
    data: {
      title,
      content,
      authorId: 1,
    },
  });
  revalidatePath("/"); /* Refreshar sidan/ bygger om sidan */
}
