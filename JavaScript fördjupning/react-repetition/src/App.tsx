import { useEffect, useState } from "react";
import CountButton from "./CountButton";

let timerId: NodeJS.Timer;

function App() {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    // ComponentDidMount & ComponentDidUpdate
    timerId = setInterval(() => setClock(new Date()), 1000);

    // ComponentWillUnmount
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return (
    <>
      <h1>Hello world</h1>
      <CountButton>Röd</CountButton>
      <CountButton title="Grön" />{" "}
      {/* Grön och Röd är children som skickas som props till CountButton. Det är två olika sätt att skriva, båda funkar. Använd av title eller children. */}
      <p>{clock.toISOString()}</p>
    </>
  );
}

export default App;

// React element -> HTML Element
// Komponent - Är uppbyggd av ett eller flera element
// Props(erties) - Samma sak som attribut
// HOOK`S med useState på CountButton.
