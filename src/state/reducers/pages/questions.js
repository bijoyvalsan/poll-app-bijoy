import {
  QUESTIONS_FETCH,
  QUESTIONS_FETCH_ERROR,
  QUESTIONS_FETCH_SUCCSSES,
  QUESTIONS_ADD,
  QUESTIONS_ADD_SUCCSSES,
  QUESTIONS_ADD_ERROR
} from "../../actions/questions";

export const initialState = {
  isLoading: true,
  hasError: false,
  questionCollection: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_FETCH: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }
    case QUESTIONS_FETCH_SUCCSSES: {
      const data = action.payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        questionCollection: data
      };
    }
    case QUESTIONS_FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    }
    case QUESTIONS_ADD: {
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    }
    case QUESTIONS_ADD_SUCCSSES: {
      const data = action.payload;
      return {
        ...state,
        isLoading: false,
        hasError: false,
        questionCollection: [data, ...state.questionCollection]
      };
    }
    case QUESTIONS_ADD_ERROR: {
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
