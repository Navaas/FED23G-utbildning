import { db } from "@/prisma/db";
import Image from "next/image";

async function PostCard() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-card bg-black text-white p-4 h-full w-full mx-auto"
        >
          <div className="relative w-full  h-96">
            <Image
              src={post.image}
              alt="Description of image"
              layout="fill" // Gör att bilden fyller hela föräldrarens storlek
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl py-4">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
