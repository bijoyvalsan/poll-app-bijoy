import React from "react";
import { render, waitFor, screen, fireEvent } from "@testing-library/react";

import Questions from "./Questions";
import * as QuestionsActions from "../../state/actions/questions";

describe("Questions Component", () => {
  let getQuestionsSpy;
  let saveQuestionSpy;

  beforeEach(() => {
    getQuestionsSpy = jest.spyOn(QuestionsActions, "getQuestions");
    saveQuestionSpy = jest.spyOn(QuestionsActions, "saveQuestion");
  });

  afterEach(() => {
    getQuestionsSpy.mockRestore();
    saveQuestionSpy.mockRestore();
  });

  it("should render with default Questions styles", () => {
    const mockData = {
      getQuestions: jest.fn(),
      saveQuestion: jest.fn(),
      isLoading: false,
      questions: [
        {
          id: "1",
          question: "Who am i ?",
          publishedAt: "10/20/2021",
          noOfChoices: 3
        },
        {
          id: "2",
          question: "Who am i ?",
          publishedAt: "10/20/2021",
          noOfChoices: 3
        }
      ]
    };
    const { asFragment } = render(<Questions {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with default QuestionsSkelton styles", () => {
    const mockData = {
      getQuestions: jest.fn(),
      saveQuestion: jest.fn(),
      isLoading: true,
      questions: [
        {
          id: "1",
          question: "Who am i ?",
          publishedAt: "10/20/2021",
          noOfChoices: 3
        },
        {
          id: "2",
          question: "Who am i ?",
          publishedAt: "10/20/2021",
          noOfChoices: 3
        }
      ]
    };
    const { asFragment } = render(<Questions {...mockData} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should Invoke getQuestions and saveQuestion", async () => {
    const mockData = {
      getQuestions: getQuestionsSpy,
      saveQuestion: saveQuestionSpy,
      isLoading: false,
      questions: [
        {
          id: "1",
          question: "Who am i ?",
          publishedAt: "10/20/2021",
          noOfChoices: 3
        },
        {
          id: "2",
          question: "Who am i ?",
          publishedAt: "10/20/2021",
          noOfChoices: 3
        }
      ]
    };

    await waitFor(() => {
      render(<Questions {...mockData} />);
    });
    expect(getQuestionsSpy).toBeCalled();

    const addQuestionBtn = screen.queryByTestId("add-question-btn");
    const txtQuestion = screen.queryByTestId("txt-question");
    const txtQuestionChoice = screen.queryByTestId("txt-question-choice");

    expect(addQuestionBtn.getAttribute("disabled")).toBe("");

    fireEvent.change(txtQuestion, { target: { value: "test question?" } });
    fireEvent.change(txtQuestionChoice, { target: { value: "1,2,3" } });
    fireEvent.click(addQuestionBtn);

    await waitFor(
      () => {
        expect(addQuestionBtn.getAttribute("disabled")).toBeNull();
        expect(saveQuestionSpy).toBeCalled();
      },
      { timeout: 1000 }
    );
  });
});
