import { useState } from "react";
import useLog from "./useLocalStorageState";

interface Props {
  title: string;
}

function CountButton(props: Props) {
  const [count, setCount] = useState(0);
  useLog();

  return (
    <>
      <button
        className="px-4 py-2 bg-slate-200 rounded-full"
        onClick={() => setCount(count + 10)}
      >
        {count}
        {props.title} {/* Hämtar titel "Röd och Blå" från App.tsx */}
      </button>
    </>
  );
}

export default CountButton;
