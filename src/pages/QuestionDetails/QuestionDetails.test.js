import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";

import QuestionDetails from "./QuestionDetails";
import * as QuestionActions from "../../state/actions/question";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    questionId: "testurl"
  })
}));

describe("QuestionDetails Component", () => {
  let getQuestionByIdSpy;
  let saveVoteForQuestionSpy;

  beforeEach(() => {
    getQuestionByIdSpy = jest.spyOn(QuestionActions, "getQuestionById");
    saveVoteForQuestionSpy = jest.spyOn(QuestionActions, "saveVoteForQuestion");
  });

  afterEach(() => {
    getQuestionByIdSpy.mockRestore();
    saveVoteForQuestionSpy.mockRestore();
  });

  it("should render with default QuestionDetails styles", () => {
    const mockData = {
      getQuestionById: jest.fn(),
      saveVoteForQuestion: jest.fn(),
      isLoading: false,
      question: {
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
      }
    };
    const { asFragment } = render(<QuestionDetails {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with default QuestionDetailsSkelton styles", () => {
    const mockData = {
      getQuestionById: jest.fn(),
      saveVoteForQuestion: jest.fn(),
      isLoading: true,
      question: {
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
      }
    };
    const { asFragment } = render(<QuestionDetails {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should Invoke getQuestionById and saveVoteForQuestion", async () => {
    const mockData = {
      getQuestionById: getQuestionByIdSpy,
      saveVoteForQuestion: saveVoteForQuestionSpy,
      isLoading: false,
      question: {
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
      }
    };

    await waitFor(() => {
      render(<QuestionDetails {...mockData} />);
    });
    expect(getQuestionByIdSpy).toBeCalled();

    const firstSaveVoteBtn = screen.queryByTestId("save-vote-0");
    fireEvent.click(firstSaveVoteBtn);

    expect(saveVoteForQuestionSpy).toBeCalled();
  });
});
