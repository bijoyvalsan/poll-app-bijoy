import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import middlewares from "./middlewares";

const reduxStore = preloadedState => {
  const store = createStore(
    reducers(),
    preloadedState,
    compose(applyMiddleware(...middlewares()))
  );

  return store;
};

export default reduxStore;
