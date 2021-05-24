import React from "react";
import { render } from "@testing-library/react";

import QuestionDetails from "./QuestionDetails";
import QuestionDetailsSkeleton from "./QuestionDetailsSkeleton";

describe("QuestionDetails Component", () => {
  it("should render with default QuestionDetails styles", () => {
    const mockData = {
      id: "1",
      question: "Who am i ?",
      choices: [
        {
          choice: "a",
          url: "/test/1",
          votes: 0,
          percentage: 0
        },
        {
          choice: "b",
          url: "/test/2",
          votes: 1,
          percentage: 100
        }
      ]
    };
    const { asFragment } = render(<QuestionDetails question={mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("QuestionDetailsSkeleton Component", () => {
  it("should render with default QuestionDetailsSkeleton styles", () => {
    const { asFragment } = render(<QuestionDetailsSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
