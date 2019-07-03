import { combineReducers } from "redux";
import lyrics from "./lyrics";
import async from "./async";
import select from "./select";

const rootReducer = combineReducers({
  lyrics,
  async,
  select
});

export default rootReducer;
