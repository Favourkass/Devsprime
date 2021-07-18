import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import DashboardDetail from "../components/DashboardDetail/index"


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
      render(<DashboardDetail image="./hakeem" detail="Welcome to decagon" teacher="Charles crook" 
                status="success" date="20/09/2021"/>, container);
    });
    expect(container.textContent).toBe("Welcome to decagon success20/09/2021");
  

  });
});




  


