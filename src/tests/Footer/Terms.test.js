import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import Terms from "../../components/Footer/Terms"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});
describe('component rendering', () => {
  test("renders Terms Component", () => {
    
    act(() => {
      render(<Terms/>, container);
      
    });
    expect(container.textContent).toBe("Terms and Conditions Faq ");
  });

});
