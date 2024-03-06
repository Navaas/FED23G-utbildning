"use client";

import { useCount } from "../CountProvider";

interface Props {
  step: number;
}

function CountButton(props: Props) {
  /* Här ropas providerns count-funktion in. */
  const { count, setCount } = useCount(); /* useCount är en hook */

  return (
    <button
      className="py-2 px-4 bg-slate-200 font-semibold"
      onClick={() => setCount(count + props.step)}
    >
      Change count with: {props.step}
    </button>
  );
}

export default CountButton;
