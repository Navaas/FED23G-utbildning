import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-slate-400 p-4 flex justify-between">
      <Link href="/">
        <h1 className="text-black">Insta-next</h1>
      </Link>
      <Link href="/NewPostPage">
        <span className="text-2xl">➕</span>
      </Link>
    </div>
  );
}
