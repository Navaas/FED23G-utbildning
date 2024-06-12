import { db } from "@/prisma/db";

export default async function Home() {
  // Hämta alla inlägg från databasen
  const posts = await db.post.findMany({});
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-grey-700 mb-2">
        Welcome to my Blog
      </h1>
      {/* Mappa ut alla inlägg här i en grå div */}
      {posts.map((post) => (
        <div key={post.id} className="bg-slate-300 p-4 rounded-md">
          <h2 className="text-xl">{post.title}</h2>
          <p className="text-neutral-700">{post.content}</p>
        </div>
      ))}
    </main>
  );
}
