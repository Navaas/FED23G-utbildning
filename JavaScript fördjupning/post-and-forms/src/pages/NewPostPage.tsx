import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
import { PostTuple } from "../AppLayout";
import { Post, PostSchema } from "../posts";

function NewPostPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useOutletContext<PostTuple>();
  const form = useForm<Post>({
    defaultValues: {
      id: nanoid(),
    } /* Lägg till ett unikt id med hjälp av nanoid */,
    resolver: zodResolver(PostSchema),
  }); /* Skapa ett tillstånd som hanterar ett inlägg. Det är en hook. */

  const savePost = (post: Post) => {
    setPosts([post, ...posts]);
    form.reset(); /* Rensa alla fält */
    navigate("/"); /* Navigera tillbaka till startsida */
  };

  return (
    <form
      className="p-2 flex flex-col gap-4"
      onSubmit={form.handleSubmit(savePost)}
    >
      <h2 className="text-3xl">Skapa ett nytt inlägg</h2>
      {/* Den här diven hade vi förmodligen velat byta ut till en egen komponent */}
      {/* Det ligger en if else ? : om det är ett fel är det rött. */}
      <div className="flex flex-col">
        <input
          className={
            (form.formState.errors.url
              ? "border-red-700 outline-red-700"
              : "border-green-200") + " border px-2 py-1"
          }
          placeholder="Bild url"
          type="text"
          {...form.register("url")} /* Detta binder det användaren skriver */
        />
        {/* För att få ut ditt felmeddelande. */}
        {form.formState.errors.url?.message && (
          <p className="text-red-700">{form.formState.errors.url?.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <input
          className={
            (form.formState.errors.url
              ? "border-red-700 outline-red-700"
              : "border-green-200") + " border px-2 py-1"
          }
          placeholder="Title"
          type="text"
          {...form.register("title")} /* Detta binder det användaren skriver. */
        />
        {form.formState.errors.url?.message && (
          <p className="text-red-700">{form.formState.errors.title?.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <textarea
          className={"border-green-200 border px-2 py-2"}
          placeholder="Text..."
          rows={6}
          {...form.register(
            "content"
          )} /* Detta binder det användaren skriver. */
        ></textarea>
        {form.formState.errors.url?.message && (
          <p className="text-red-700">
            {form.formState.errors.content?.message}
          </p>
        )}
        <button className="text-xl bg-green-200 p-2">Spara</button>
      </div>
    </form>
  );
}

export default NewPostPage;
