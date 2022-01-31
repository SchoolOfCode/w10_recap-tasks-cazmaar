import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index.js";

describe("writing tests for the button", () => {
  test("if state is managed correctly likes should start at 0", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button.innerHTML).toBe("0 Likes 👍");
  });

  test("if button is clicked the number of likes should go up by 1", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    fireEvent.click(button)
    expect(button.innerHTML).toBe("1 Likes 👍");
  });
});
