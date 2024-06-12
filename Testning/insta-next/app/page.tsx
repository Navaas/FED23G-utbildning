import Link from "next/link";
import Header from "./ui/Header";
import PostCard from "./ui/PostCard";

export default async function Home() {
  return (
    <main>
      <Header />
      <Link href="/NewPostPage">
        <button>Skapa ny</button>
      </Link>
      <Link href="/FavoritePage">
        <button>Favorit post</button>
      </Link>
      <PostCard />
    </main>
  );
}
