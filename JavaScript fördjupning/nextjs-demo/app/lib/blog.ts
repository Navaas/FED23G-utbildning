/* Hur ser en blog ut. TYPNING */
export interface Blog {
  slug: string; // Unikt
  title: string;
  subtitle: string;
  content: string;
}

/* All vår mockade data. DATA */
export const mockedBlogs: Blog[] = [
  {
    slug: "server",
    title: "Server",
    subtitle: "What is Server Components?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
  },
  {
    slug: "routing",
    title: "Routing",
    subtitle: "How do i navigate in NextJs?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
  },
  {
    slug: "caching", // "Tillfällig lagring" är översättningen
    title: "Caching",
    subtitle: "What happens to my data?",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, debitis suscipit sapiente voluptates obcaecati neque accusamus veniam corporis vel quo ipsa quibusdam voluptas commodi eligendi vitae dicta ullam, beatae nobis?",
  },
];

/* FUNCTIONS (CRUD) */
export function getBlogBySlug(slug: string) {
  return mockedBlogs.find((blog) => blog.slug === slug);
}
