import { getBlogBySlug } from "@/app/lib/blog";

type PageProps = { params: { slug: string } };

export default function BlogPage({ params }: PageProps) {
  const blog = getBlogBySlug(params.slug);

  /* Om den hitta en blog med rätt slug, så skrivs det ut. Annars visas "Not found" */
  if (!blog) {
    return (
      <main className="p-4">
        <h2>Not found</h2>
      </main>
    );
  }

  return (
    <main className="p-4">
      <p className="uppercase mt-4 mb-2">Documentaion</p>
      <hr className="border-stone-300" />
      <h2 className="text-6xl mt-4 mb-8">{blog.title}</h2>
      <p className="text-xl mt-4 mb-2">{blog.subtitle}</p>
      <p className=" py-2">{blog.content}</p>
    </main>
  );
}
