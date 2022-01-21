import { render, screen } from "@testing-library/react";
import App from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";

import { RenderResult } from "@testing-library/react";

let wrapper: RenderResult;

describe("Homepage", () => {
  const mount = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  describe("Homepage", () => {
    beforeEach(() => {
      wrapper = mount();
    });

    it("renders correctly", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
