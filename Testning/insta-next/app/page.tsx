import { db } from "@/prisma/db";
import Link from "next/link";
import Header from "./ui/Header";

export default async function Home() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <main>
      <Header />
      <Link href="/PostForm">
        <button>Skapa ny</button>
      </Link>
      <Link href="/FavoritePage">
        <button>Favorit post</button>
      </Link>

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
