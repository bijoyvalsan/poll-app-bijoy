import { connect } from "react-redux";

import QuestionDetails from "./QuestionDetails";

import {
  getQuestionById,
  saveVoteForQuestion
} from "../../state/actions/question";
import {
  getQuestionDetailForListPage,
  isQuestionDetailPageLoading
} from "../../state/selectors/question";

const mapStateToProps = state => ({
  question: getQuestionDetailForListPage(state),
  isLoading: isQuestionDetailPageLoading(state)
});

const mapDispatchToProps = {
  getQuestionById,
  saveVoteForQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
