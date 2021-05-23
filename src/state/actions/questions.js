import { fetchQuestions } from "../../services/questionServices";

export const QUESTIONS_FETCH = "QUESTIONS_FETCH";
export const QUESTIONS_FETCH_SUCCSSES = "QUESTIONS_FETCH_SUCCSSES";
export const QUESTIONS_FETCH_ERROR = "QUESTIONS_FETCH_ERROR";

export const getQuestions = () => dispatch => {
  dispatch({
    type: QUESTIONS_FETCH
  });

  fetchQuestions()
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
