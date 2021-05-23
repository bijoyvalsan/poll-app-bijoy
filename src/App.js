import React from "react";
import { Route, Switch } from "react-router-dom";
import { Questions, QuestionDetails } from "./pages";
import { Header } from "./components";

import { routes } from "./config/routeConfig";

import { StyledContainer, StyledMain } from "./App.styled";

const App = () => (
  <StyledContainer>
    <Header />
    <StyledMain id="main">
      <Switch>
        <Route exact path={routes.QUESTIONS} component={Questions} />
        <Route
          exact
          path={`${routes.QUESTION_DETAILS}/:questionId`}
          component={QuestionDetails}
        />
      </Switch>
    </StyledMain>
  </StyledContainer>
);

export default App;
