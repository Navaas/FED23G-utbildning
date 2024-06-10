import { describe, expect, it } from "vitest";
import { sum } from "./sum";

describe("Sum function", () => {
  it("should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  //   it("should sum more than two argument", () => {
  //     expect(sum(1, 2, 3)).toBe(6);
  //   });
  it("should sum the value from an array", () => {
    expect(() => sum([1, 2, 3, 4]).toBe(10));
  });
});
