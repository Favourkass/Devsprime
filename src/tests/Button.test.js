import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Button from '../components/button/index';


let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('component rendering', () => {
  test("component renders with no label provided but without content", () => {
    act(() => {
      render(<Button />, container);
    });
    expect(container.textContent).toBe("");
  });  

  test("component renders with the label provided", () => {
    act(() => {
      render(<Button>Submit</Button>, container);
    });
    expect(container.textContent).toBe("Submit");
  
    act(() => {
      render(<Button>Sign Up</Button>, container);
    });
    expect(container.textContent).toBe("Sign Up");
  });
});
