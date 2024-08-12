import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";

describe("CountButton", () => {
  it("Should start at 0", () => {
    // Arrange/Act, Förbered testet. Hämta komponenten.
    render(<CountButton />);

    // Assert
    expect(screen.getByRole("button")).toHaveTextContent("count is 0");
  });
});
