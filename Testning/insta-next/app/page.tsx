import { db } from "@/prisma/db";
import Link from "next/link";

export default async function Home() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <main>
      <Link href="/PostForm">
        <button>Skapa ny</button>
      </Link>
      <Link href="/FavoritePage">
        <button>Favorit post</button>
      </Link>

      <h1>Insta-next</h1>
      {posts.map((post) => (
        <div className="flex flex-col gap-2" key={post.id}>
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
          <img src={post.image} alt="bild" />
        </div>
      ))}
    </main>
  );
}
