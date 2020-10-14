import { combineReducers } from "redux";
import todo from "./todo";
import list from "./list";
import ui from "./ui";

const rootReducer = combineReducers({
  todo,
  list,
  ui,
});

export default rootReducer;
