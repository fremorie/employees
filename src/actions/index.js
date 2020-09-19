// @flow

import type {Employee} from '../types';

export const OPEN_EMPLOYEE_ADD_DIALOGUE = 'OPEN_EMPLOYEE_ADD_DIALOGUE';
export const CLOSE_EMPLOYEE_ADD_DIALOGUE = 'CLOSE_EMPLOYEE_ADD_DIALOGUE';
export const OPEN_EMPLOYEE_EDIT_DIALOGUE = 'OPEN_EMPLOYEE_EDIT_DIALOGUE';
export const CLOSE_EMPLOYEE_EDIT_DIALOGUE = 'CLOSE_EMPLOYEE_EDIT_DIALOGUE';
export const ADD_NEW_EMPLOYEE = 'ADD_NEW_EMPLOYEE';
export const OPEN_EMPLOYEE_INFO = 'OPEN_EMPLOYEE_INFO';
export const OPEN_TABLE = 'OPEN_TABLE';

export const ACTIONS = Object.freeze({
    OPEN_EMPLOYEE_ADD_DIALOGUE,
    CLOSE_EMPLOYEE_ADD_DIALOGUE,
    OPEN_EMPLOYEE_EDIT_DIALOGUE,
    CLOSE_EMPLOYEE_EDIT_DIALOGUE,
    ADD_NEW_EMPLOYEE,
    OPEN_EMPLOYEE_INFO,
    OPEN_TABLE,
});

export type DefaultAction = {|
    type: $Keys<typeof ACTIONS>,
|};

export type UpdateEmployeeAction = {|
    type: $Keys<typeof ACTIONS>,
    payload: {|
        employee: Employee,
        isNew: boolean,
    |},
|};

export type OpenEmployeeInfoAction = {|
    type: $Keys<typeof ACTIONS>,
    payload: number,
|};

export const openEmployeeAddDialogAction = (): DefaultAction => ({
    type: OPEN_EMPLOYEE_ADD_DIALOGUE,
});

export const closeEmployeeAddDialogAction = (): DefaultAction => ({
    type: CLOSE_EMPLOYEE_ADD_DIALOGUE,
});

export const openEmployeeEditDialogAction = (): DefaultAction => ({
    type: OPEN_EMPLOYEE_EDIT_DIALOGUE,
});

export const closeEmployeeEditDialogAction = (): DefaultAction => ({
    type: CLOSE_EMPLOYEE_EDIT_DIALOGUE,
});

export const updateEmployeeAction = (payload: {|employee: Employee, isNew: boolean|}): UpdateEmployeeAction => ({
    type: ADD_NEW_EMPLOYEE,
    payload,
});

export const openEmployeeInfoAction = (payload: number): OpenEmployeeInfoAction => ({
    type: OPEN_EMPLOYEE_INFO,
    payload,
});

export const openTableAction = (): DefaultAction => ({
    type: OPEN_TABLE,
});
