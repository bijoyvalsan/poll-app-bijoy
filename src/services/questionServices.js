const API_BASE_PATH = "https://polls.apiblueprint.org";

export const fetchQuestions = () =>
  fetch(`${API_BASE_PATH}/questions`).then(response => response.json());

export const fetchQuestionById = urlPath =>
  fetch(`${API_BASE_PATH}${urlPath}`).then(response => response.json());

export const saveVote = urlPath =>
  fetch(`${API_BASE_PATH}${urlPath}`, {
    method: "POST"
  }).then(response => response.json());

export const addQuestion = data =>
  fetch(`${API_BASE_PATH}/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
