import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import App from "./App";
import configureStore from "./state/store";

const store = configureStore({});

describe("App Component", () => {
  it("should render", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
