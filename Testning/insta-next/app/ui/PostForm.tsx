"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { savePost } from "../actions/post";

export const postSchema = z.object({
  title: z.string().min(1, { message: "Titel är obligatorisk" }),
  content: z.string().min(1, { message: "Beskrivning är obligatorisk" }),
  image: z.string().min(1, { message: "Bild är obligatorisk" }),
});

export type PostCreate = z.infer<typeof postSchema>;

function PostForm() {
  const form = useForm<PostCreate>({ resolver: zodResolver(postSchema) });
  const { errors } = form.formState;

  const handleSubmit = async (data: PostCreate) => {
    try {
      await savePost(data);
      console.log("Ny post skapad:", data);
      form.reset();
      window.location.href = "/";
    } catch (error: any) {
      console.error("Error handling submit:", error);
    }
  };

  return (
    <div className="bg-blue-50 p-4 rounded-md w-full sm:w-1/3 m-4 drop-shadow-xl">
      <form
        className="w-full flex flex-col gap-2 "
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <h2>Skapa nytt inlägg</h2>
        <input
          {...form.register("title")}
          type="text"
          placeholder="Skriv en titel.."
          className="p-2 w-full rounded-md mt-4"
        />

        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}
        <input
          {...form.register("image")}
          type="text"
          placeholder="Lägg till bild url.."
          className="p-2 rounded-md"
        />
        {errors.image && (
          <span className="text-red-600">{errors.image.message}</span>
        )}
        <textarea
          {...form.register("content")}
          rows={8}
          placeholder="Beskrivning.."
          className="p-2 rounded-md"
        />
        {errors.content && (
          <span className="text-red-600">{errors.content.message}</span>
        )}
        <button className="p-2 bg-blue-400 text-white">Spara</button>
      </form>
    </div>
  );
}

export default PostForm;
