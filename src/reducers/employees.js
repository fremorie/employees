// @flow

import type {Employee} from '../types';
import {ACTIONS, type UpdateEmployeeAction} from '../actions';
import {INITIAL_STATE} from '../constants';

const employees = (state: Employee[] = INITIAL_STATE.employees, action: UpdateEmployeeAction): Employee[] => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_EMPLOYEE:
            const {employee, isNew} = action.payload;

            if (isNew) {
                return [...state, employee];
            }

            const employeeIndex = state.findIndex(({id}) => id === employee.id);
            const updatedState = [...state];
            updatedState[employeeIndex] = employee;

            return updatedState;

        default:
            return state;
    }
};

export default employees;
