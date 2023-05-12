// import { createSlice } from "@reduxjs/toolkit";
// import { employeeData } from "../../Components/Employees/FetchData";

import {
  DELETE_EMPLOYEE,
  GET_EMPLOYEE,
  GET_SINGLE_EMPLOYEE,
  POST_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "../Actions/EmployeeActionsTypes";

// export const employeeSlice = createSlice({
//   name: "employee",
//   initialState: { details: employeeData },
//   reducers: {
//     addEmployee: (state, action) => {
//       state.details.push(action.payload);
//     },

//     deleteEmployee: (state, action) => {
//       state.details = state.details.filter(
//         (employee) => employee.id !== action.payload.id
//       );
//     },
//     updateEmployee: (state, action) => {
//       state.details.map((employee) => {
//         if (employee.id === action.payload.id) {
//           employee.name = action.payload.employee.name;
//           employee.email = action.payload.employee.email;
//           employee.dob = action.payload.employee.dob;
//           employee.salary = action.payload.employee.salary;
//           employee.gender = action.payload.employee.gender;
//         }
//       });
//     },
//   },
// });
// export const { addEmployee, deleteEmployee, updateEmployee } =
//   employeeSlice.actions;
// export default employeeSlice.reducer;

const initialState = {
  employees: [],
  employee: {},
  loading: true,
};

const employeeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employees: action.payload,
        loading: false,
      };
    case POST_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
        loading: false,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case GET_SINGLE_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
        loading: false,
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((employee) => {
          if (employee.id === action.payload.id) {
            employee.name = action.payload.employee.name;
            employee.email = action.payload.employee.email;
            employee.dob = action.payload.employee.dob;
            employee.salary = action.payload.employee.salary;
            employee.gender = action.payload.employee.gender;
          }

          return employee;
        }),
        loading: false,
      };
    default:
      return state;
  }
};
export default employeeReducers;
