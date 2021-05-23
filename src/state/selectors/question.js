// import { formatDate } from '../../helpers/date';

export const getQuestionDetailForListPage = state => {
  const selectedQuestion = state.pages.question.question;
  if (Object.keys(selectedQuestion).length === 0) {
    return {};
  }

  const totalVotes = selectedQuestion.choices.reduce((acc, currentChoice) => {
    const total = acc + currentChoice.votes;
    return total;
  }, 0);

  return {
    id: selectedQuestion.url,
    question: selectedQuestion.question,
    choices: selectedQuestion.choices.map(c => {
      const votePercentage = parseFloat(c.votes) / parseFloat(totalVotes);
      return {
        ...c,
        percentage: Number.isNaN(votePercentage)
          ? 0
          : Math.round(votePercentage * 100)
      };
    })
  };
};

export const isQuestionDetailPageLoading = state => {
  return state.pages.question.isLoading;
};
