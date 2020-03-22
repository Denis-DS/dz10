import { combineReducers } from "redux";
import { randomuserReducer } from "./reducers/randomuser";

export default combineReducers({
  randomuser: randomuserReducer
});
