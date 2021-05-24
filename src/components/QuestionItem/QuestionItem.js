import React from "react";
import PropTypes from "prop-types";

import {
  StyledContainer,
  StyledQuestionTitle,
  StyledQuestionPublishDate,
  StyledQuestionChoices
} from "./QuestionItem.styled";

const QuestionItem = ({ questionItem, onClick }) => (
  <StyledContainer pointer onClick={onClick}>
    <StyledQuestionTitle>{questionItem.question}</StyledQuestionTitle>
    <StyledQuestionPublishDate>
      Published: {questionItem.publishedAt}
    </StyledQuestionPublishDate>
    <StyledQuestionChoices>
      No. Choices: {questionItem.noOfChoices}
    </StyledQuestionChoices>
  </StyledContainer>
);

QuestionItem.defaultProps = {
  onClick: () => {}
};

QuestionItem.propTypes = {
  onClick: PropTypes.func,
  questionItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    noOfChoices: PropTypes.number.isRequired
  }).isRequired
};

export default QuestionItem;
