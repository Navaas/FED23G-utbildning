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
      "React Server Components allow you to write UI that can be rendered and optionally cached on the server. In Next.js, the rendering work is further split by route segments to enable streaming and partial rendering, and there are three different server rendering strategies: Static Rendering, Dynamic Rendering and Streaming.",
  },
  {
    slug: "routing",
    title: "Routing",
    subtitle: "How do i navigate in NextJs?",
    content:
      "Next.js uses a file-system based router where: Folders are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the root folder down to a final leaf folder that includes a page.js file. Files are used to create UI that is shown for a route segment.",
  },
  {
    slug: "caching", // "Tillfällig lagring" är översättningen
    title: "Caching",
    subtitle: "What happens to my data?",
    content:
      "Next.js improves your application's performance and reduces costs by caching rendering work and data requests. This page provides an in-depth look at Next.js caching mechanisms, the APIs you can use to configure them, and how they interact with each other. By default, Next.js will cache as much as possible to improve performance and reduce cost. This means routes are statically rendered and data requests are cached unless you opt out. The diagram below shows the default caching behavior: when a route is statically rendered at build time and when a static route is first visited.",
  },
];

/* FUNCTIONS (CRUD) */
export function getBlogBySlug(slug: string) {
  return mockedBlogs.find((blog) => blog.slug === slug);
}
