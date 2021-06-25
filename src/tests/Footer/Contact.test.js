import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";


import Contact from "../../components/Footer/Contact";


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
     
        test("renders contact component with the telephone number,email and address of the company", () => {
    
    act(() => {
      render(<Contact/>, container);
      
    });
    expect(container.textContent).toBe(" Contact us+23481234567devsprimesq007@gmail.com 7, Asajon way,Sangotedo Ajah Lagos");
   });

});