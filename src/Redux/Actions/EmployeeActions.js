import { http } from "../../services/api";
import { GET_EMPLOYEE, POST_EMPLOYEE } from "./EmployeeActionsTypes";

export const fetchEmployee = () => {
  return async function (dispatch) {
    return await http.get("./employee").then((res) => {
      console.log(res.data.data);
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data.data,
      });
    });
  };
};

export const postEmployee = (data) => {
  return async function (dispatch) {
    dispatch({
      type: POST_EMPLOYEE,
      payload: false,
    });
    return await http.post("./employee", data).then((res) => {
      console.log(res);
      dispatch({
        type: POST_EMPLOYEE,
        payload: true,
      });
    });
  };
};
