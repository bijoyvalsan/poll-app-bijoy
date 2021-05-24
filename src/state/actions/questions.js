import { fetchQuestions, addQuestion } from "../../services/questionServices";

export const QUESTIONS_FETCH = "QUESTIONS_FETCH";
export const QUESTIONS_FETCH_SUCCSSES = "QUESTIONS_FETCH_SUCCSSES";
export const QUESTIONS_FETCH_ERROR = "QUESTIONS_FETCH_ERROR";

export const QUESTIONS_ADD = "QUESTIONS_ADD";
export const QUESTIONS_ADD_SUCCSSES = "QUESTIONS_ADD_SUCCSSES";
export const QUESTIONS_ADD_ERROR = "QUESTIONS_ADD_ERROR";

export const getQuestions = () => dispatch => {
  dispatch({
    type: QUESTIONS_FETCH
  });

  return fetchQuestions()
    .then(payload => {
      dispatch({
        type: QUESTIONS_FETCH_SUCCSSES,
        payload
      });
    })
    .catch(() => {
      dispatch({
        type: QUESTIONS_FETCH_ERROR
      });
    });
};

export const saveQuestion = ({ question, choices }) => dispatch => {
  dispatch({
    type: QUESTIONS_ADD
  });

  return addQuestion({ question, choices })
    .then(payload => {
      dispatch({
        type: QUESTIONS_ADD_SUCCSSES,
        payload
      });
    })
    .catch(() => {
      dispatch({
        type: QUESTIONS_ADD_ERROR
      });
    });
};
