import { createStore, applyMiddleware, compose } from "redux";

import reducers from "./reducers";
import middlewares from "./middlewares";

const isDev = process.env.NODE_ENV === "development";

const composeEnhancers =
  (isDev && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = preloadedState => {
  const store = createStore(
    reducers(),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares()))
  );

  return store;
};

export default store;
