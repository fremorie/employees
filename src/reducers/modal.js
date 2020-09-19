// @flow

import type {Modal} from '../types';
import {ACTIONS, type DefaultAction} from '../actions';
import {INITIAL_STATE} from '../constants';

const modal = (state: Modal = INITIAL_STATE.modal, action: DefaultAction): Modal => {
    switch (action.type) {
        case ACTIONS.OPEN_EMPLOYEE_ADD_DIALOGUE:
            return {
                ...state,
                isEmployeeAddModalOpen: true,
            };
        case ACTIONS.CLOSE_EMPLOYEE_ADD_DIALOGUE:
            return {
                ...state,
                isEmployeeAddModalOpen: false,
            };
        case ACTIONS.OPEN_EMPLOYEE_EDIT_DIALOGUE:
            return {
                ...state,
                isEmployeeEditModalOpen: true,
            };
        case ACTIONS.CLOSE_EMPLOYEE_EDIT_DIALOGUE:
            return {
                ...state,
                isEmployeeEditModalOpen: false,
            };
        case ACTIONS.ADD_NEW_EMPLOYEE:
            return {
                ...state,
                isEmployeeAddModalOpen: false,
                isEmployeeEditModalOpen: false,
            };
        default:
            return state;
    }
};

export default modal;
