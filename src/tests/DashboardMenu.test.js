import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DashboardMenu from '../components/dashboard-menu/index';


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
  test("component renders with no props provided but without content", () => {
    act(() => {
      render(<DashboardMenu />, container);
    });
    expect(container.textContent).toBe("");
  });  

  test("component renders with the props provided", () => {
    act(() => {
      render(<DashboardMenu menuItem="Courses" firstItem="Upload Course" secondItem=" My Courses " thirdItem="Delete Course"/>, container);
    });
    expect(container.textContent).toBe("Upload Course My Courses Delete Course");
  });
});
