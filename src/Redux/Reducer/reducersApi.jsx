import React from "react";

const initialState = {
  details: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        details: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
