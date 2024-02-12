import { ReactNode, useEffect, useState } from "react";

interface Props {
  title?: string;
  children?: ReactNode;
} /* Måste typa upp ett interface för props, för att det är TypeScript. Annars får man fel. */

function CountButton(props: Props) {
  // Lägg till HOOK´S STATE
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Number is: " + count;
  });

  return (
    <button
      className="bg-slate-200 rounded-full px-4 py-2"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {props.title || props.children}: {count}
      {/* Detta är kopplat till title i App.tsx */}
    </button>
  );
}

export default CountButton;
