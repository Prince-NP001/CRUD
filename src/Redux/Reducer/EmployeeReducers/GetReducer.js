import React from 'react'
import { GET_EMPLOYEE } from '../../Actions/EmployeeActionsTypes'



export const GetReducerEmployee = (state = [], action) => {
    switch (action.type) {
        case GET_EMPLOYEE: return action.payload;
        default: return state;
    }
}




