import React from "react";
import { render } from "@testing-library/react";

import QuestionItem from "./QuestionItem";
import QuestionItemSkeleton from "./QuestionItemSkeleton";

describe("QuestionItem Component", () => {
  it("should render with default QuestionItem styles", () => {
    const mockData = {
      id: "1",
      question: "Who am i ?",
      publishedAt: "12/12/1991 12:00",
      noOfChoices: 3
    };
    const { asFragment } = render(<QuestionItem questionItem={mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("QuestionItemSkeleton Component", () => {
  it("should render with default QuestionItemSkeleton styles", () => {
    const { asFragment } = render(<QuestionItemSkeleton />);
    expect(asFragment()).toMatchSnapshot();
  });
});
