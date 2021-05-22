export const fetchQuestions = () =>
  fetch(
    'https://polls.apiblueprint.org/questions'
  ).then(response => response.json());

export const fetchQuestionById = id =>
  fetch(
    `https://polls.apiblueprint.org/questions/${id}`
  ).then(response => response.json());

export const saveVote = (questionId, choiceId) =>
  fetch(
    `https://polls.apiblueprint.org/questions/${questionId}/choices/${choiceId}`, {
    method: "POST"
  }).then(response => response.json());


