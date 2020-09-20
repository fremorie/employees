import {
    getEmployeeById,
    getNextEmployeeId,
    getEmployeeList,
    getCurrentEmployeeId,
    getCurrentScreen,
    isEmployeeAddModalOpen,
    isEmployeeEditModalOpen,
} from '../.';

import {SCREENS} from '../../constants';

const state = {
    modal: {
        isEmployeeEditModalOpen: false,
        isEmployeeAddModalOpen: false,
    },
    employees: [
        {name: 'name', lastname: 'lastname', jobPosition: 'jobPosition', description: 'description', id: 1},
        {name: 'name2', lastname: 'lastname2', jobPosition: 'jobPosition2', description: 'description2', id: 2},
    ],
    screenManager: {
        currentScreen: SCREENS.EMPLOYEE_INFO,
        employeeId: 2,
    },
};

describe('selectors', () => {
    it('getEmployeeById достает просматриваемого сотрудника', () => {
        expect(getEmployeeById(state)).toEqual({
            name: 'name2',
            lastname: 'lastname2',
            jobPosition: 'jobPosition2',
            description: 'description2',
            id: 2,
        });
    });

    it('getEmployeeById возвращает пустой объект, если id не существует', () => {
        expect(getEmployeeById({
            ...state,
            screenManager: {currentScreen: SCREENS.EMPLOYEE_INFO, employeeId: 123},
        })).toEqual({});
    });

    it('getNextEmployeeId получает id следующего сотрудника', () => {
        expect(getNextEmployeeId(state)).toEqual(3);
    });

    it('getEmployeeList достает список сотрудников', () => {
        expect(getEmployeeList(state)).toEqual(
            [
                {name: 'name', lastname: 'lastname', jobPosition: 'jobPosition', description: 'description', id: 1},
                {name: 'name2', lastname: 'lastname2', jobPosition: 'jobPosition2', description: 'description2', id: 2},
            ],
        );
    });

    it('getCurrentEmployeeId возвращает id текущего сотрудника', () => {
        expect(getCurrentEmployeeId(state)).toEqual(2);
    });

    it('getCurrentScreen возвращает текущий экран', () => {
        expect(getCurrentScreen(state)).toEqual(SCREENS.EMPLOYEE_INFO);
    });

    it('isEmployeeAddModalOpen показывает, открыт ли диалог на добавление', () => {
        expect(isEmployeeAddModalOpen(state)).toEqual(false);
    });

    it('isEmployeeEditModalOpen показывает, открыт ли диалог на редактирование', () => {
        expect(isEmployeeEditModalOpen(state)).toEqual(false);
    });
});
