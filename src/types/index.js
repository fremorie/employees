// @flow

import {SCREENS} from '../constants';

export type Employee = {|
    name: string,
    lastname: string,
    jobPosition: string,
    description?: string,
    id: number,
|};

export type Modal = {|
    isEmployeeAddModalOpen: boolean,
    isEmployeeEditModalOpen: boolean,
|};

export type ScreenManager = {|
    currentScreen: Screen,
    employeeId?: number,
|};

export type Screen = $Keys<typeof SCREENS>;

export type State = {|
    employees: Employee[],
    modal: Modal,
    screenManager: ScreenManager,
|};
