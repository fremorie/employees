// @flow

import type {State} from '../types';

export const SCREENS = Object.freeze({
    EMPLOYEE_INFO: 'EMPLOYEE_INFO',
    TABLE: 'TABLE',
});

export const INITIAL_STATE: State = {
    modal: {
        isEmployeeEditModalOpen: false,
        isEmployeeAddModalOpen: false,
    },
    employees: [],
    screenManager: {
        currentScreen: SCREENS.TABLE,
    },
};
