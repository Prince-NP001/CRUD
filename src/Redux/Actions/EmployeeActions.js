import { http } from "../../services/api";
import { GET_EMPLOYEE, POST_EMPLOYEE, UPDATE_EMPLOYEE } from "./EmployeeActionsTypes";

export const fetchEmployee = () => {
  return async function (dispatch) {
    return await http.get("/employee").then((res) => {
      console.log(res.data.data);
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data.data,
      });
    });
  };
};

export const postEmployee = (data) => {
  return function (dispatch) {
    dispatch({
      type: POST_EMPLOYEE,
      payload: false,
    });
    return http.post("/employee", data).then((res) => {
      console.log(res);
      dispatch({
        type: POST_EMPLOYEE,
        payload: true,
      });
    });
  };
};

export const updateEmployee = (targetID, data) => {
  return function (dispatch) {
    dispatch({
      type: UPDATE_EMPLOYEE,
      payload: false,
    });
    return http.patch(`/employee/${targetID}`, data).then((res) => {
      console.log(res);
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: true,
      });
    });
  };
};
