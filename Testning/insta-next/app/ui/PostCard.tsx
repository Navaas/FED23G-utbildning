import { db } from "@/prisma/db";
import Image from "next/image";

async function PostCard() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });
  return (
    <div className="flex justify-center gap-8 flex-col items-center md:flex-row">
      {posts.map((post) => (
        <div key={post.id}>
          <h2 className="text-xl">{post.title}</h2>
          <p>{post.content}</p>
          <div className="w-350 h-350 relative">
            <Image
              src={post.image}
              alt="Description of image"
              width={350}
              height={350}
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
