import { describe, expect, it } from "vitest";
import { sum } from "./sum";

// 1. Hämta funktionen sum från sum.ts
// 2. Förklara vad funktionen gör
// 3. Expect vad funktionen returnerar när den anropas med 1 och 2
describe("Sum", () => {
  it("should sum two values", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
