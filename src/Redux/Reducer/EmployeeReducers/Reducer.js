import React from "react";
import {
  GET_EMPLOYEE,
  POST_EMPLOYEE,
} from "../../Actions/EmployeeActionsTypes";

const initialState = {
  details: [],
  isResponse: false,
};

export const ReducerEmployee = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return { details: action.payload };
    case POST_EMPLOYEE:
      return { isResponse: action.payload };
    default:
      return state;
  }
};
