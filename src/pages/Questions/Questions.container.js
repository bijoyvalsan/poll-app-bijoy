import { connect } from "react-redux";

import Questions from "./Questions";

import { getQuestions, saveQuestion } from "../../state/actions/questions";
import {
  getQuestionsForListPage,
  isQuestionsPageLoading
} from "../../state/selectors/questions";

const mapStateToProps = state => ({
  questions: getQuestionsForListPage(state),
  isLoading: isQuestionsPageLoading(state)
});

const mapDispatchToProps = {
  getQuestions,
  saveQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
