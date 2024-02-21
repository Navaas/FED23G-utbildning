import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Post } from "../posts";

function NewPostPage() {
  const form = useForm<Post>({
    defaultValues: {
      id: nanoid(),
    } /* Lägg till ett unikt id med hjälp av nanoid */,
  }); /* Skapa ett tillstånd som hanterar ett inlägg. Det är en hook. */

  const savePost = (post: Post) => {
    console.log("Spara inlägget", post);
  };

  return (
    <form
      className="p-2 flex flex-col gap-4"
      onSubmit={form.handleSubmit(savePost)}
    >
      <h2 className="text-3xl">Skapa ett nytt inlägg</h2>

      <input
        className="border-green-200 border px-2 py-1"
        placeholder="Bild url"
        type="text"
        {...form.register("url")} /* Detta binder det användaren skriver */
      />
      <input
        className="border-green-200 border px-2 py-1"
        placeholder="Title"
        type="text"
        {...form.register("title")} /* Detta binder det användaren skriver. */
      />

      <textarea
        className="border-green-200 border px-2 py-2"
        placeholder="Text..."
        rows={6}
        {...form.register("content")} /* Detta binder det användaren skriver. */
      ></textarea>
      <button className="text-xl bg-green-200 p-2">Spara</button>
    </form>
  );
}

export default NewPostPage;
