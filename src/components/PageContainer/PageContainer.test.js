import React from "react";
import { render } from "@testing-library/react";

import PageContainer from "./PageContainer";

describe("PageContainer Component", () => {
  it("should render with default PageContainer styles", () => {
    const { asFragment } = render(
      <PageContainer title="test123">
        <div>123</div>
      </PageContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should contain title test123", () => {
    const { queryByTestId } = render(
      <PageContainer title="test123">
        <div>123</div>
      </PageContainer>
    );
    const titleElement = queryByTestId("page-container-title");
    expect(titleElement.textContent).toBe("test123");
  });
});
