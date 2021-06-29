import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import Policy from "../../components/Footer/Policy"


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
  test("renders the Privacy policy with the company name and the year", () => {    
    act(() => {
      render(<Policy company="DECAGON" year="2021" />, container);
    });
    expect(container.textContent).toBe("All Rights Reserved | DEVSPRIME 2021 Privacy Policy Site Credits");
  });

});
