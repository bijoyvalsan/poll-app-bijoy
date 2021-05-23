import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Question, Page } from "../../components";

const QuestionDetails = ({
  getQuestionById,
  isLoading,
  question,
  saveVoteForQuestion
}) => {
  const { questionId } = useParams();
  useEffect(() => {
    getQuestionById(decodeURIComponent(questionId));
  }, [getQuestionById, questionId]);

  const handleOnVoteClick = urlPath => {
    return () => {
      saveVoteForQuestion(urlPath);
    };
  };

  return (
    <Page title="Question Details">
      <div>
        {isLoading && <Question.QuestionDetailsSkeleton />}
        {!isLoading && (
          <>
            <Question.QuestionDetails
              question={question}
              onVote={handleOnVoteClick}
            />
          </>
        )}
      </div>
    </Page>
  );
};

QuestionDetails.defaultProps = {
  getQuestionById: () => {},
  saveVoteForQuestion: () => {}
};

QuestionDetails.propTypes = {
  getQuestionById: PropTypes.func,
  saveVoteForQuestion: PropTypes.func,
  question: PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    choices: PropTypes.arrayOf(
      PropTypes.shape({
        choice: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        votes: PropTypes.number.isRequired,
        percentage: PropTypes.number.isRequired
      })
    )
  }),
  isLoading: PropTypes.bool.isRequired
};

export default QuestionDetails;
