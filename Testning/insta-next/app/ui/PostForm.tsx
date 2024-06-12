"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { savePost } from "../actions/post";

export const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  image: z.string().optional(),
  postDate: z.date(),
});

export type PostCreate = z.infer<typeof postSchema>;

function PostForm() {
  const form = useForm<PostCreate>({ resolver: zodResolver(postSchema) });

  const {
    formState: { errors },
  } = form;

  const handleSubmit = async (data: PostCreate) => {
    try {
      await savePost(data);
      form.reset();
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form
      className="w-96 flex flex-col gap-2"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <input
        {...form.register("title")}
        type="text"
        placeholder="Skriv en titel.."
      />
      {errors.title && <span>{errors.title.message}</span>}
      <input
        {...form.register("image")}
        type="text"
        placeholder="Lägg till bild url.."
      />
      <textarea
        {...form.register("content")}
        rows={4}
        placeholder="Beskrivning.."
      />
      {errors.content && <span>{errors.content.message}</span>}
      <button>Save post</button>
    </form>
  );
}

export default PostForm;
