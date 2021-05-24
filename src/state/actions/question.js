import { fetchQuestionById, saveVote } from "../../services/questionServices";

export const QUESTION_SINGLE_FETCH = "QUESTION_SINGLE_FETCH";
export const QUESTION_SINGLE_FETCH_SUCCSSES = "QUESTION_SINGLE_FETCH_SUCCSSES";
export const QUESTION_SINGLE_FETCH_ERROR = "QUESTION_SINGLE_FETCH_ERROR";

export const QUESTION_SINGLE_VOTE = "QUESTION_SINGLE_VOTE";
export const QUESTION_SINGLE_VOTE_SUCCSSES = "QUESTION_SINGLE_VOTE_SUCCSSES";
export const QUESTION_SINGLE_VOTE_ERROR = "QUESTION_SINGLE_VOTE_ERROR";

export const getQuestionById = urlPath => dispatch => {
  dispatch({
    type: QUESTION_SINGLE_FETCH
  });

  return fetchQuestionById(urlPath)
    .then(payload => {
      dispatch({
        type: QUESTION_SINGLE_FETCH_SUCCSSES,
        payload
      });
    })
    .catch(() => {
      dispatch({
        type: QUESTION_SINGLE_FETCH_ERROR
      });
    });
};

export const saveVoteForQuestion = urlPath => dispatch => {
  dispatch({
    type: QUESTION_SINGLE_VOTE
  });

  return saveVote(urlPath)
    .then(payload => {
      dispatch({
        type: QUESTION_SINGLE_VOTE_SUCCSSES,
        payload
      });
    })
    .catch(() => {
      dispatch({
        type: QUESTION_SINGLE_VOTE_ERROR
      });
    });
};
