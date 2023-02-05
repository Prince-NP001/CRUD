import { combineReducers } from "redux";
import employeeReducers from "./Reducer";

const rootReducer = combineReducers({
  reducer: employeeReducers,
});
export default rootReducer;
