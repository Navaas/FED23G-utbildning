"use client";

/* Kontexten ser alltid likadan ut, men byt ut innehållet till det du vill att den ska göra. */

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// Vad som ska kunna skickas över kontexten
interface ContextValue {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

// Motorvägen - ett alternativ till Props
const CountContext = createContext<ContextValue>({} as ContextValue);

// Påfarten - en väg till det som skickas ut över kontexten
function CountProvider(props: PropsWithChildren) {
  const [count, setCount] = useState(0);

  /* Eventuellt lägger man uppdateringslogik här (increment, decrement) addToCart eller removeToCard */

  return (
    /* Bilarna - value är det som skickas över kontexten */
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
}

// Avfarten - för att kunna ta emot kontext data i komponenterna.
export const useCount = () => useContext(CountContext);
export default CountProvider;
