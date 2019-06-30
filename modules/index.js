import { combineReducers } from "redux";
import lyrics from "./lyrics";
import async from "./async";

const rootReducer = combineReducers({
  lyrics,
  async
});

export default rootReducer;
