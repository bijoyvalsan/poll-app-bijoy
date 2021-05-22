import { Route, Switch } from "react-router-dom";
import {
  Questions,
} from "./pages";
import { Header } from './components';

import { routes } from "./config/routeConfig";

import { StyledContainer, StyledMain } from './App.styled';

const App = () => (
  <StyledContainer>
    <Header />
    <StyledMain id="main">
      <Switch>
        <Route exact path={routes.QUESTIONS} component={Questions} />
      </Switch>
    </StyledMain>
  </StyledContainer>
);

export default App;

