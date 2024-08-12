import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TodoForm from "./TodoForm";

describe("TodoForm", () => {
  it("should render an input with a submit button", () => {
    render(<TodoForm onSubmit={vi.fn()} />);

    expect(screen.getByRole("textbox")).toBeVisible();
    expect(screen.getByRole("button")).toHaveTextContent("Save");
  });

  it("should submit the text that was entered in the input", () => {
    const handleSubmit = vi.fn();

    render(<TodoForm onSubmit={handleSubmit} />);
    // Skriv Eat och klicka på spara knappen
    fireEvent.input(screen.getByRole("textbox"), { target: { value: "Eat" } });
    fireEvent.click(screen.getByRole("button"));
    // Testet förväntar sig att du har skrivit in "Eat" och klickat på knappen. Skriver du text "Hej" istället så går inte testet igenom.
    expect(handleSubmit).toBeCalledWith("Eat");
  });
});
