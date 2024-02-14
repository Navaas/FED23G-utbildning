import { useState } from "react";

function useLocalStorageState() {
  const [state, setState] = useState;
  console.log("Spara kod till local storage");
  return [state, setState];
}

export default useLocalStorageState;
