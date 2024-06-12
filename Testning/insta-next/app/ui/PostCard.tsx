import { db } from "@/prisma/db";
import Image from "next/image";

async function PostCard() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <div className="flex gap-8 flex-col  md:flex-row">
      {posts.map((post) => (
        <div key={post.id} className="bg-black text-white p-4 w-full h-96 ">
          <div className="relative w-full  h-2/3">
            <Image
              src={post.image}
              alt="Description of image"
              layout="fill" // Gör att bilden fyller hela föräldrarens storlek
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
