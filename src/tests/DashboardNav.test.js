import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DashBoardNav from '../components/DashboardNav/index'


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
  test("component renders without props", () => {
    act(() => {
      render(<DashBoardNav />, container);
    });
    expect(container.textContent).toBe("");
  });  
});
describe('<DasgboardNav />', () => {
  test("renders with a props provided", () => {
    act(() => {
      render(<DashBoardNav details="Course Details" instructor="Type" date="Date" category="Category" type="Type" />, container);
    });
    expect(container.textContent).toBe("Course DetailsCategoryTypeDate");
  });
});

