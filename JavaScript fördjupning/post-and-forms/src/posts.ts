import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  url: z.string().url({ message: "Var god och ange en giltig url" }),
  title: z.string().min(5, { message: "Titeln måste vara minst 5 tecken" }),
  content: z
    .string()
    .max(60, { message: "Inlägget får vara 60 tecken långt." }),
});

export type Post = z.infer<typeof PostSchema>;

/* Mockad data, hittepå data som senare kan bytas ut. */
export const mockedPosts: Post[] = [
  {
    id: "1",
    url: "https://files.oaiusercontent.com/file-8FvpqQ1wshcb61YInZ5oSONa?se=2024-02-21T09%3A46%3A31Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da37671f0-670f-463e-9f70-51d73c35bc95.webp&sig=BTLmZC3t2u0sCVLx/S7/Nsgw2oN6FjSv8lSJnxwaTZw%3D",
    title: "Kolla in solen",
    content:
      "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus enim omnis alias distinctio, labore deserunt repudiandae odio dolore explicabo repellendus officia ipsum laboriosam illum tempore facilis soluta maiores non sunt.",
  },
  {
    id: "2",
    url: "https://files.oaiusercontent.com/file-4s4QILhvMC8yMGzp4K8XJMQB?se=2024-02-21T09%3A49%3A35Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D8f6521f9-9f55-4857-b357-9e42c198bc41.webp&sig=q%2BkJkWWDKpz8CwlPxl%2Bs0dX61oZlKVFNMsINYYgzmfk%3D",
    title: "Familjen på månen",
    content:
      "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus enim omnis alias distinctio, labore deserunt repudiandae odio dolore explicabo repellendus officia ipsum laboriosam illum tempore facilis soluta maiores non sunt.",
  },
  {
    id: "3",
    url: "https://files.oaiusercontent.com/file-hWZa9PgEY1L1HWjZRqHCJ4Cg?se=2024-02-21T09%3A53%3A38Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D3397c217-b105-4c56-81b7-00d7669c8dcf.webp&sig=cuESfoaEhXshgUIkMeqHY0fU1kEDFu5A1DBhI4ZNu6I%3D",
    title: "Nu åker vi till Spanien",
    content: "Lorem.......",
  },
];
