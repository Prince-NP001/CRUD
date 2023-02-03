import { createSlice } from "@reduxjs/toolkit";
import { employeeData } from "../../Components/Employees/FetchData";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: { details: employeeData },
  reducers: {
    addEmployee: (state, action) => {
      state.details.push(action.payload);
    },

    deleteEmployee: (state, action) => {
      state.details = state.details.filter(
        (employee) => employee.id !== action.payload.id
      );
    },
    updateEmployee: (state, action) => {
      state.details.map((employee) => {
        if (employee.id === action.payload.id) {
          employee.name = action.payload.employee.name;
          employee.email = action.payload.employee.email;
          employee.dob = action.payload.employee.dob;
          employee.salary = action.payload.employee.salary;
          employee.gender = action.payload.employee.gender;
        }
      });
    },
  },
});
export const { addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducer;
