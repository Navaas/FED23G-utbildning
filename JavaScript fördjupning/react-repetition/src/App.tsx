import CountButton from "./CountButton";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <CountButton>Röd</CountButton>
      <CountButton title="Grön" />{" "}
      {/* Grön och Röd är children som skickas som props till CountButton. Det är två olika sätt att skriva, båda funkar. Använd av title eller children. */}
    </>
  );
}

export default App;

// React element -> HTML Element
// Komponent - Är uppbyggd av ett eller flera element
// Props(erties) - Samma sak som attribut
