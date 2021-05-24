import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header Component", () => {
  it("should render with default Header styles", () => {
    const { asFragment } = render(<Header>Poll App</Header>);
    expect(asFragment()).toMatchSnapshot();
  });
});
