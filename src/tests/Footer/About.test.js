import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import About from "../../components/Footer/About"


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
test("renders the about component with the name of the company and summary about them", () => { 
    act(() => {
      render(<About/>, container);
    });
    expect(container.textContent).toBe("DEVSPRIMEDevsprime is an online education platform that delivers video courses,programs and undending blog updates.");
  });
});
