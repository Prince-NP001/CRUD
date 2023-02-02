import { GET_EMPLOYEE } from "./EmployeeActionsTypes"

export const fetchEmployee = (data) => {
    return {
        type: GET_EMPLOYEE,
        payload: data,
    }
}