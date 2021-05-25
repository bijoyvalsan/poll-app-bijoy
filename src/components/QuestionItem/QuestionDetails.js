import React from "react";
import PropTypes from "prop-types";

import SaveVote from "../Button";

import {
  StyledContainer,
  StyledContainerItem,
  StyledDeailsContainer,
  StyledDeailsColumn,
  StyledDeailsRow,
  StyledSubTitle,
  StyledBox
} from "./QuestionDetails.styled";

const QuestionDetails = ({ question, onVote }) => (
  <StyledBox>
    <StyledSubTitle>Question: {question.question}</StyledSubTitle>
    <StyledContainer>
      {question.choices.map((c, i) => (
        <StyledContainerItem key={c.url}>
          <StyledDeailsContainer>
            <StyledDeailsColumn>
              <StyledDeailsRow>
                Choice {i + 1}: {c.choice}
              </StyledDeailsRow>
            </StyledDeailsColumn>
            <StyledDeailsColumn>
              <StyledDeailsRow>Votes: {c.votes}</StyledDeailsRow>
            </StyledDeailsColumn>
            <StyledDeailsColumn>
              <StyledDeailsRow>Percentage: {c.percentage}%</StyledDeailsRow>
            </StyledDeailsColumn>
            <StyledDeailsColumn>
              <SaveVote.Button
                data-testid={`save-vote-${i}`}
                onClick={onVote(c.url)}
              >
                Save Vote
              </SaveVote.Button>
            </StyledDeailsColumn>
          </StyledDeailsContainer>
        </StyledContainerItem>
      ))}
    </StyledContainer>
  </StyledBox>
);

QuestionDetails.defaultProps = {
  onVote: () => {}
};

QuestionDetails.propTypes = {
  onVote: PropTypes.func,
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
  })
};

export default QuestionDetails;
