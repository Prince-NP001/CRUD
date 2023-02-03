import { combineReducers } from "redux";
import { ReducerEmployee } from "./Reducer";
import Reducer from "./reducersApi";
const rootReducer = combineReducers({
  reducer: Reducer
});
export default rootReducer;
