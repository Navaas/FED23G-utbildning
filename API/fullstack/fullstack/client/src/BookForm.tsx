function BookForm() {
  const addBook = async () => {
    const book = {
      title: "Testar JS i skolan!",
      author: "6628fddbd6f2022b8e722008",
      isbn: "E18293771623",
      publishDate: "2023-10-11T11:13:04.123Z",
    };

    const response = await fetch("/api/books", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(book),
    });

    const newBook = await response.json();
    console.log("New book:", newBook);
  };

  return <button onClick={addBook}>Add a new book</button>;
}

export default BookForm;
