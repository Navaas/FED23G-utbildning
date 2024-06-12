import PostCard from "./ui/PostCard";

export default async function Home() {
  return (
    <main className="w-full md:w-4/5 flex flex-col items-center gap-4 p-4 mx-auto">
      <PostCard />
    </main>
  );
}
