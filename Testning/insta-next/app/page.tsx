import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/PostForm">
        <button>Skapa ny</button>
      </Link>
      <Link href="/FavoritePage">
        <button>Favorit post</button>
      </Link>

      <h1>Insta-next</h1>
    </main>
  );
}
