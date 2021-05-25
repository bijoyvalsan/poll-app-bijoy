import React from "react";
import { render } from "@testing-library/react";

import Textbox from "./Textbox";

describe("Textbox Component", () => {
  it("should render with default Textbox styles", () => {
    const mockData = {
      id: "txt-search",
      placeholder: "search",
      value: "",
      label: "search",
      onChange: jest.fn()
    };
    const { asFragment } = render(<Textbox {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
