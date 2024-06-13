import { db } from "@/prisma/db";
import Image from "next/image";

async function PostCard() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <div className="flex  gap-8 flex-col  md:flex-row">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-card bg-black text-white p-4 w-full md:w-3/4 lg:w-2/3 h-128 mx-auto"
        >
          <div className="relative w-full  h-2/3">
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
