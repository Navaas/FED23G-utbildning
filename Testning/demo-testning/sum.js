export function sum(a, b) {
  const aType = typeof a;
  const bType = typeof b;

  if (aType !== "number" || bType !== "number") {
    throw new Error("sum: arguments must be numbers");
  }

  //   for (let arg of arg) {
  //     if (typeof arg !== "number") {
  //       throw new Error("sum: arguments must be numbers");
  //     }
  //   }

  return a + b;
}
