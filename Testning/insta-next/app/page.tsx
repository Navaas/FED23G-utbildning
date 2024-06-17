import PostCard from "./ui/PostCard";

export default async function Home() {
  return (
    <main className="w-full md:w-full flex gap-1 justify-center flex-wrap">
      <PostCard />
    </main>
  );
}
