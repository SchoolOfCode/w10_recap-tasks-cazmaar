import { render, screen } from "@testing-library/react";
import Comment from "./index.js";

const testProps = { name: "kaz", text: "interesting" };

describe("if component works correctly it should display both the name and comment", () => {
  test("should dispaly name correctly if the component works as expected", () => {
    render(<Comment {...testProps} />);
    const pName = screen.getByTestId("commentname");
    expect(pName.innerHTML).toBe("kaz Says:");
  });
  test("should dispaly comment correctly if the component works as expected", () => {
    render(<Comment {...testProps} />);
    const pComment = screen.getByTestId("comment");
    expect(pComment.innerHTML).toBe("interesting");
  });
});
