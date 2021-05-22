import { combineReducers } from "redux";

import pages from "./pages";

const reducer = () =>
  combineReducers({
    pages
  });

export default reducer;
