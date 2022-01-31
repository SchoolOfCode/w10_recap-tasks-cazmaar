import ParagraphTitle from "./index.js";
import { render, screen } from "@testing-library/react"

const testProps = {title:"Pigeons"}

test("should display the correct title", () => {
 render(<ParagraphTitle {...testProps}/>)
 const title = screen.getByText("Pigeons")
 expect(title).toBeInTheDocument()
});
