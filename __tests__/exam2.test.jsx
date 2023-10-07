import { render, screen } from "@testing-library/react";
import EXAM2 from "@/exam2";


//it error 
describe("Test the App Component", () => {
  test("header renders with react testing tutorial in the document", () => {
    const component = render(<EXAM2 />);
    const linkElement = component.getByText(/This is React Testing Tutorial/i);
    expect(linkElement).toBeInTheDocument();
  });

});