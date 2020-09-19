// @flow
import {createSelector} from 'reselect';

import type {State, Employee} from '../types';

export const isEmployeeAddModalOpen = (state: State): boolean => state.modal.isEmployeeAddModalOpen;
export const isEmployeeEditModalOpen = (state: State): boolean => state.modal.isEmployeeEditModalOpen;

export const getCurrentEmployeeId = (state: State): number | void => state.screenManager.employeeId;
export const getEmployeeList = (state: State): Employee[] => state.employees;

export const getEmployeeById = createSelector(
    getCurrentEmployeeId,
    getEmployeeList,
    (employeeId, employees) => employees.find(({id}) => id === employeeId),
);

export const getNextEmployeeId = createSelector(
    getEmployeeList,
    employees => employees.length + 1,
);
