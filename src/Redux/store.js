import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./Reducer/Reducer";


const store = configureStore({
  reducer: {
    employees: employeeReducer
  }
});
export default store;
