"use client";

import { useCount } from "../CountProvider";

function CountLabel() {
  const { count } = useCount();
  return (
    <>
      <span>{count}</span>
    </>
  );
}

export default CountLabel;
