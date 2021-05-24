import React from "react";
import { render } from "@testing-library/react";

import { Button } from "./Button";

describe("Button Component", () => {
  it("should render with default button styles", () => {
    const { asFragment } = render(<Button>Test Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
