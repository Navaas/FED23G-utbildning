import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-blue-300 p-4 flex justify-between">
        <Link href="/">
          <h1 className="text-blue-950">Insta-next</h1>
        </Link>
        <Link href="/NewPostPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 cursor-pointer text-blue-950"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}
