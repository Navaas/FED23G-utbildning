import PostCard from "./ui/PostCard";

export default async function Home() {
  return (
    <main className="w-full md:w-4/5 mx-auto flex gap-1 justify-center flex-wrap my-10">
      <PostCard />
    </main>
  );
}
