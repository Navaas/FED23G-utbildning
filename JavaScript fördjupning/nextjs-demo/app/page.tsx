import Link from "next/link";
import { mockedBlogs } from "./lib/blog";

export default function Home() {
  return (
    <main className="p-4">
      <p className="uppercase mt-4 mb-2">Documentation</p>
      <hr className="border-stone-300" />
      <h2 className="text-6xl mt-4 mb-8">Learn NextJS</h2>
      <p className=" py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>

      <section className="flex flex-col gap-6 my-4">
        <h3 className="text-4xl">Get Started</h3>
        {mockedBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="border p-4 shadow rounded flex justify-between items-center hover:bg-stone-100 "
          >
            <div>
              <p className="text-2xl">{blog.title}</p>
              <p className="font-bold">{blog.subtitle}</p>
            </div>
            <span className="text-2xl">➡️</span>
          </Link>
        ))}
      </section>

      <p className=" py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>
      <p className=" py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>
      <p className=" py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>
      <p className=" py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>
      <p className=" py-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
        debitis suscipit sapiente voluptates obcaecati neque accusamus veniam
        corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta
        ullam, beatae nobis?
      </p>
    </main>
  );
}
