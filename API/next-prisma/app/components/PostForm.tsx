"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { savePost } from "../actions/actions";
import { PostCreate, PostCreateSchema } from "../validation/post";

export default function PostForm() {
  const form = useForm<PostCreate>({ resolver: zodResolver(PostCreateSchema) });

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
      <input {...form.register("title")} type="text" placeholder="Title" />
      {errors.title && <span>{errors.title.message}</span>}
      <textarea {...form.register("content")} rows={4} placeholder="Content" />
      {errors.content && <span>{errors.content.message}</span>}
      <button>Save post</button>
    </form>
  );
}
