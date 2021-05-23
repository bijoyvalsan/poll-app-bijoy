import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Question, Page } from "../../components";
import { routes } from "../../config/routeConfig";

import { StyledContainer } from "./Questions.styled";

const Questions = ({ getQuestions, isLoading, questions }) => {
  const history = useHistory();
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  const handleOnQuestionClick = url => {
    return () => {
      history.push(`${routes.QUESTION_DETAILS}/${encodeURIComponent(url)}`);
    };
  };

  return (
    <Page title="Questions">
      <StyledContainer>
        {isLoading && (
          <>
            <Question.QuestionItemSkeleton />
            <Question.QuestionItemSkeleton />
            <Question.QuestionItemSkeleton />
            <Question.QuestionItemSkeleton />
          </>
        )}
        {!isLoading && (
          <>
            {questions.map(q => (
              <Question.QuestionItem
                key={q.id}
                questionItem={q}
                onClick={handleOnQuestionClick(q.id)}
              />
            ))}
          </>
        )}
      </StyledContainer>
    </Page>
  );
};

Questions.defaultProps = {
  getQuestions: () => {}
};

Questions.propTypes = {
  getQuestions: PropTypes.func,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      question: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      noOfChoices: PropTypes.number.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Questions;
