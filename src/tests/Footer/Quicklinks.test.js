import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import Quicklinks from "../../components/Footer/Quicklinks"


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
  test("renders Quicklinks Component", () => {
    
    act(() => {
      render(<Quicklinks/>, container);
      
    });
    expect(container.textContent).toBe("QuicklinksHomeCoursesAbout UsContact UsBecome a contributor");
  });

});
  
