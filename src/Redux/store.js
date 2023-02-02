
import { combineReducers, createStore } from "redux";
import { GetReducerEmployee } from "./Reducer/EmployeeReducers/GetReducer"

const combinedReducers = combineReducers({
    GetReducerEmployee
})
const store = createStore(combinedReducers)
export default store;