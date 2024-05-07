import { useEffect, useState } from "react";

function BookList() {
  /* Hantera tillståndet för böcker */
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState<any[]>([]);

  /* Hämta böckerna från API'et */
  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true);
      const response = await fetch("/api/books");
      const books = await response.json();
      setBooks(books);
      setIsLoading(false);
    };
    fetcher();
  }, []);

  /* Visa böckerna på sidan */
  return (
    <ul>
      {isLoading ? (
        <li>Loading...</li>
      ) : (
        books.map((book) => <li>{book.title}</li>)
      )}
    </ul>
  );
}

export default BookList;
