import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CountButton from "./CountButton";

// Detta är ett enhets test för CountButton komponenten.
describe("CountButton", () => {
  it("Should start at 0", () => {
    // Arrange/Act, Förbered testet. Hämta komponenten.
    render(<CountButton />);

    // Assert
    expect(screen.getByRole("button")).toHaveTextContent("count is 0");
  });

  it("Should increment count when clicked", () => {
    // Klicka en gång på knappen och count ändas till 1.
    render(<CountButton />);
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/1/);
    // Klicka på knappen två gånger till och count ändas till 3.
    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent(/3/);
  });
});
