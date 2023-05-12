import { http } from "../../services/api";
import {
  DELETE_EMPLOYEE,
  GET_EMPLOYEE,
  GET_SINGLE_EMPLOYEE,
  POST_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "./EmployeeActionsTypes";

export const fetchEmployee = () => {
  return async (dispatch) => {
    return await http.get("/employee").then((res) => {
      // console.log(res.data.data);
      dispatch({
        type: GET_EMPLOYEE,
        payload: res.data.data,
      });
    });
  };
};

export const postEmployee = (data) => {
  return async (dispatch) => {
    await http.post(`/employee`, data).then((res) => {
      // console.log(res);
      dispatch({
        type: POST_EMPLOYEE,
        payload: res.data.data,
      });
      // dispatch({
      //   type: GET_EMPLOYEE,
      //   payload: res.data.data,
      // });
    });
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    return await http.delete(`/employee/${id}`).then((res) => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id,
      });
    });
  };
};
export const getSingleEmployee = (id) => {
  return async (dispatch) => {
    return await http.get(`/employee/${id}`).then(async (res) => {
      await dispatch({
        type: GET_SINGLE_EMPLOYEE,
        payload: res.data.data,
      });
    });
  };
};

export const updateEmployee = (data) => {
  return async (dispatch) => {
    return await http.patch(`/employee/${data.id}`, data.data).then((res) => {
      // console.log(res);
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: { id: data.id, employee: data.data },
      });
    });
  };
};
