// @flow

import type {ScreenManager} from '../types';
import {ACTIONS, type OpenEmployeeInfoAction} from '../actions';
import {INITIAL_STATE, SCREENS} from '../constants';

const screenManager = (state: ScreenManager = INITIAL_STATE.screenManager, action: OpenEmployeeInfoAction): ScreenManager => {
    switch (action.type) {
        case ACTIONS.OPEN_EMPLOYEE_INFO:
            const employeeId = action.payload;

            return {
                ...state,
                currentScreen: SCREENS.EMPLOYEE_INFO,
                employeeId,
            };
        case ACTIONS.OPEN_TABLE:
            return {
                ...state,
                currentScreen: SCREENS.TABLE,
                employeeId: undefined,
            };
        default:
            return state;
    }
};

export default screenManager;
