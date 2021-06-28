import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Input from '../components/Input/index';


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
  test("component renders with no value provided but without content", () => {
    act(() => {
      render(<Input />, container);
    });
    expect(container.textContent).toBe("");
  });  
});
describe('<Input />', () => {
  test("renders with a value provided", () => {
    act(() => {
      render(<Input value="Submit" />, container);
    });
    expect(container.textContent).toBe("");
  
    act(() => {
      render(<Input value="Sign Up" />, container);
    });
    expect(container.textContent).toBe("");
  });
});

