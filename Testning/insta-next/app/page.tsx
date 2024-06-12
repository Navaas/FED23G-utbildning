import { db } from "@/prisma/db";
import Image from "next/image";
import Link from "next/link";
import Header from "./ui/Header";

export default async function Home() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <main>
      <Header />
      <Link href="/NewPostPage">
        <button>Skapa ny</button>
      </Link>
      <Link href="/FavoritePage">
        <button>Favorit post</button>
      </Link>

      {posts.map((post) => (
        <div className="flex flex-col gap-2" key={post.id}>
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
          <Image
            src={post.image}
            alt="Description of image"
            width={50}
            height={30}
            layout="responsive" // Valfritt, specificera layout
          />
        </div>
      ))}
    </main>
  );
}
