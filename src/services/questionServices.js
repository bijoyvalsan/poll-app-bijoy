const API_BASE_PATH = "https://polls.apiblueprint.org";

export const fetchQuestions = () =>
  fetch(`${API_BASE_PATH}/questions`).then(response => response.json());

export const fetchQuestionById = urlPath =>
  fetch(`${API_BASE_PATH}${urlPath}`).then(response => response.json());

export const saveVote = urlPath =>
  fetch(`${API_BASE_PATH}${urlPath}`, {
    method: "POST"
  }).then(response => response.json());
