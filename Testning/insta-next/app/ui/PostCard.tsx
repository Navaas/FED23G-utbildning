import { db } from "@/prisma/db";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

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
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </div>
          <h2 className="text-xl py-4">{post.title}</h2>
          <p>{post.content}</p>
          <div className="flex justify-between mt-4">
            <DeleteButton id={post.id} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
