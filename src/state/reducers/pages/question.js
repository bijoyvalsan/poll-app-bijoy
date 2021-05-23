import {
  QUESTION_SINGLE_FETCH,
  QUESTION_SINGLE_FETCH_SUCCSSES,
  QUESTION_SINGLE_FETCH_ERROR,
  QUESTION_SINGLE_VOTE,
  QUESTION_SINGLE_VOTE_SUCCSSES,
  QUESTION_SINGLE_VOTE_ERROR
} from "../../actions/question";

export const initialState = {
  isLoading: true,
  hasError: false,
  question: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_SINGLE_FETCH: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }
    case QUESTION_SINGLE_FETCH_SUCCSSES: {
      const data = action.payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        question: data
      };
    }
    case QUESTION_SINGLE_FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    }
    case QUESTION_SINGLE_VOTE: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }
    case QUESTION_SINGLE_VOTE_SUCCSSES: {
      const data = action.payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        question: {
          ...state.question,
          choices: state.question.choices.map(c => {
            if (c.url === data.url) {
              return data;
            }
            return c;
          })
        }
      };
    }
    case QUESTION_SINGLE_VOTE_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    }
    default:
      return state;
  }
};

export default reducer;
