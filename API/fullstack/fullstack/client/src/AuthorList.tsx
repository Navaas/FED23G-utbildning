import { useQuery } from "@tanstack/react-query";

function AuthorList() {
  /* Hantera tillståndet för författare */
  /* Hämta författarna från API'et */
  const authors = useQuery<any[]>({
    queryKey: ["authors"],
    queryFn: async () => {
      const response = await fetch("/api/authors");
      return await response.json();
    },
  });

  /* Visa författarna på sidan */
  return (
    <ul>
      {authors.isLoading ? (
        <li>Laddar...</li>
      ) : (
        authors.data?.map((author) => <li>{author.name}</li>)
      )}
    </ul>
  );
}

export default AuthorList;
