import Paragraph from "./index.js";
import { render, screen } from "@testing-library/react";

const testProps = { text: "BlaBlaBla" };

test("should display the correct title", () => {
  render(<Paragraph {...testProps} />);
  const text = screen.getByText("BlaBlaBla");
  expect(text).toBeInTheDocument();
});
