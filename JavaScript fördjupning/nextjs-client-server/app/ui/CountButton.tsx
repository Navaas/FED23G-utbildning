"use client";

import { useState } from "react";

function CountButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="py-2 px-4 bg-slate-200 font-semibold"
      onClick={() => setCount(count + 1)}
    >
      Click Count: {count}
    </button>
  );
}

export default CountButton;
