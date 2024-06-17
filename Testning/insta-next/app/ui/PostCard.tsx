import { db } from "@/prisma/db";
import "@fontsource/josefin-sans";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

async function PostCard() {
  const posts = await db.post.findMany({
    orderBy: { id: "desc" } /* Byter ordningen på listan */,
  });

  return (
    <div className=" p-4 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <div
          key={post.id}
          className="post-card bg-blue-50 text-black p-4 h-full w-full mx-auto drop-shadow-xl rounded-md font-josefin"
        >
          <div className="relative w-full  h-96">
            <Image
              src={post.image}
              alt="Description of image"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl py-4">{post.title}</h2>
          <p>{post.content}</p>
          <div className="flex justify-between mt-4">
            <DeleteButton id={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
