import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Question,
  PageContainer,
  Button as AddQuestion,
  Textbox
} from "../../components";
import { routes } from "../../config/routeConfig";

import {
  StyledContainer,
  StyledAddQuestionContainer
} from "./Questions.styled";

const Questions = ({ getQuestions, isLoading, questions, saveQuestion }) => {
  const [newQuestionValue, setNewQuestionValue] = useState("");
  const [newQuestionChoiceValue, setNewQuestionChoiceValue] = useState("");
  const history = useHistory();
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  const handleOnQuestionClick = url => {
    return () => {
      history.push(`${routes.QUESTION_DETAILS}/${encodeURIComponent(url)}`);
    };
  };

  const handleOnSaveQuestionClick = useCallback(() => {
    saveQuestion({
      question: newQuestionValue,
      choices: newQuestionChoiceValue.split(",")
    });
  }, [saveQuestion, newQuestionValue, newQuestionChoiceValue]);

  const handleOnQuestionChange = useCallback(
    e => {
      setNewQuestionValue(e.target.value);
    },
    [setNewQuestionValue]
  );

  const handleOnQuestionChoiceChange = useCallback(
    e => {
      setNewQuestionChoiceValue(e.target.value);
    },
    [setNewQuestionChoiceValue]
  );
  const disableAddQuestionBtn =
    newQuestionValue === "" || newQuestionChoiceValue === "";
  return (
    <>
      <PageContainer title="Add Question">
        <StyledAddQuestionContainer>
          <Textbox
            label="New Question"
            placeholder="Add Question here"
            value={newQuestionValue}
            onChange={handleOnQuestionChange}
          />
          <Textbox
            label="Choices"
            placeholder="Choices seperated by comma"
            value={newQuestionChoiceValue}
            onChange={handleOnQuestionChoiceChange}
          />
          <AddQuestion.Button
            disabled={disableAddQuestionBtn}
            onClick={handleOnSaveQuestionClick}
          >
            Add Question
          </AddQuestion.Button>
        </StyledAddQuestionContainer>
      </PageContainer>
      <PageContainer title="Questions">
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
      </PageContainer>
    </>
  );
};

Questions.defaultProps = {
  getQuestions: () => {},
  saveQuestion: () => {}
};

Questions.propTypes = {
  getQuestions: PropTypes.func,
  saveQuestion: PropTypes.func,
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
