import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  getQuestionById,
  saveVoteForQuestion,
  QUESTION_SINGLE_FETCH,
  QUESTION_SINGLE_FETCH_SUCCSSES,
  QUESTION_SINGLE_VOTE,
  QUESTION_SINGLE_VOTE_SUCCSSES
} from "../actions/question";

import { fetchQuestionById, saveVote } from "../../services/questionServices";

jest.mock("../../services/questionServices");

const mockStore = configureStore([thunk]);

const initialState = {
  pages: {
    question: {
      isLoading: true,
      hasError: false,
      question: {}
    }
  }
};

beforeEach(() => {
  jest.resetModules();
  jest.resetAllMocks();
});

describe("Test question Actions", () => {
  it("test getQuestionById", () => {
    const mockResponse = {
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
    };
    const store = mockStore(initialState);

    fetchQuestionById.mockResolvedValue(mockResponse);
    return store.dispatch(getQuestionById("/test/url")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe(QUESTION_SINGLE_FETCH);
      expect(actions[1].type).toBe(QUESTION_SINGLE_FETCH_SUCCSSES);
      expect(actions[1].payload).toEqual(mockResponse);
    });
  });

  it("test saveVoteForQuestion", () => {
    const store = mockStore(initialState);
    const mockResponse = {
      url: "/questions/1/choices/1",
      votes: 1,
      choice: "Swift"
    };
    saveVote.mockResolvedValue(mockResponse);
    return store.dispatch(saveVoteForQuestion("/test/url")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toBe(QUESTION_SINGLE_VOTE);
      expect(actions[1].type).toBe(QUESTION_SINGLE_VOTE_SUCCSSES);
      expect(actions[1].payload).toEqual(mockResponse);
    });
  });
});
