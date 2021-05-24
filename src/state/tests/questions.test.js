import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getQuestions,
  saveQuestion,
  QUESTIONS_FETCH,
  QUESTIONS_FETCH_SUCCSSES,
  QUESTIONS_ADD,
  QUESTIONS_ADD_SUCCSSES
} from "../actions/questions";

import { fetchQuestions, addQuestion } from "../../services/questionServices";

jest.mock("../../services/questionServices");

const mockStore = configureStore([thunk]);

const initialState = {
  pages: {
    questions: {
      isLoading: true,
      hasError: false,
      questionCollection: []
    }
  }
};

beforeEach(() => {
  jest.resetModules();
  jest.resetAllMocks();
});

describe("Test questions Actions", () => {
  it("test getQuestions", () => {
    const mockResponse = [
      {
        question: "Favourite programming language?",
        published_at: "2014-11-11T08:40:51.620Z",
        url: "/questions/1",
        choices: [
          {
            choice: "Swift",
            url: "/questions/1/choices/1",
            votes: 2048
          },
          {
            choice: "Python",
            url: "/questions/1/choices/2",
            votes: 1024
          },
          {
            choice: "Objective-C",
            url: "/questions/1/choices/3",
            votes: 512
          },
          {
            choice: "Ruby",
            url: "/questions/1/choices/4",
            votes: 256
          }
        ]
      }
    ];
    const store = mockStore(initialState);

    fetchQuestions.mockResolvedValue(mockResponse);
    return store.dispatch(getQuestions("/test/url")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe(QUESTIONS_FETCH);
      expect(actions[1].type).toBe(QUESTIONS_FETCH_SUCCSSES);
      expect(actions[1].payload).toEqual(mockResponse);
    });
  });

  it("test saveQuestion", () => {
    const store = mockStore(initialState);
    const mockResponse = {
      url: "/questions/1/choices/1",
      votes: 1,
      choice: "Swift"
    };

    const inputData = {
      question: "test 123",
      choices: ["a", "b"]
    };
    addQuestion.mockResolvedValue(mockResponse);
    return store.dispatch(saveQuestion(inputData)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe(QUESTIONS_ADD);
      expect(actions[1].type).toBe(QUESTIONS_ADD_SUCCSSES);
      expect(actions[1].payload).toEqual(mockResponse);
    });
  });
});
