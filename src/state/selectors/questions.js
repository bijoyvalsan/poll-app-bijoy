import { formatDate } from "../../helpers/date";

export const getQuestionsForListPage = state => {
  return state.pages.questions.questionCollection.map(q => ({
    question: q.question,
    publishedAt: formatDate(q.published_at),
    noOfChoices: q.choices.length,
    id: q.url
  }));
};

export const isQuestionsPageLoading = state => {
  return state.pages.questions.isLoading;
};
