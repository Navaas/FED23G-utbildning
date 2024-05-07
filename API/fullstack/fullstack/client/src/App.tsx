import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import AuthorList from "./AuthorList";
import BookForm from "./BookForm";
import BookList from "./BookList";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Author</h1>
      <AuthorList />

      <h1>Books</h1>
      <BookForm />
      <BookList />
    </QueryClientProvider>
  );
}

export default App;
