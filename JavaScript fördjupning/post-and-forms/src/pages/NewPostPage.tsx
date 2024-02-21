function NewPostPage() {
  return (
    <form className="p-2 flex flex-col gap-4">
      <h2 className="text-3xl">Skapa ett nytt inlägg</h2>

      <input
        className="border-green-200 border px-2 py-1"
        placeholder="Bild url"
        type="text"
      />
      <input
        className="border-green-200 border px-2 py-1"
        placeholder="Title"
        type="text"
      />

      <textarea
        className="border-green-200 border px-2 py-2"
        placeholder="Text..."
        rows={6}
      ></textarea>
      <button className="text-xl bg-green-200 p-2">Spara</button>
    </form>
  );
}

export default NewPostPage;
