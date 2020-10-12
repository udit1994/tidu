import { combineReducers } from "redux";
import card from "./todo";
import list from "./list";
import ui from "./ui";

const rootReducer = combineReducers({
  card,
  list,
  ui,
});

export default rootReducer;
