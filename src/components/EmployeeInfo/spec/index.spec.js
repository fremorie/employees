import React from 'react';
import {Provider} from 'react-redux';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';

import Mocks from '../../../spec/Mocks';
import {SCREENS} from '../../../constants';

import {enhance, Base, mapStateToProps} from '../';

jest.mock('../../EmployeeEditModal', () => 'employeeeditmodal');

const mockStore = configureMockStore();
const {BaseComponent} = Mocks;

const BaseProps = {
    openTable: jest.fn(),
    openEmployeeEditDialog: jest.fn(),
    updateEmployee: jest.fn(),
    closeEmployeeEditDialog: jest.fn(),
    name: 'name',
    lastname: 'lastname',
    jobPosition: 'jobPosition',
    description: 'description',
    id: 0,
};

const state = {
    modal: {
        isEmployeeEditModalOpen: false,
        isEmployeeAddModalOpen: false,
    },
    employees: [{name: 'name', lastname: 'lastname', jobPosition: 'jobPosition', description: 'description', id: 0}],
    screenManager: {
        currentScreen: SCREENS.EMPLOYEE_INFO,
        employeeId: 0,
    },
};

const store = mockStore(state);

describe('EmployeeInfo', () => {
    it('рендерит необходимые элементы', () => {
        const component = mount(
            <Base {...BaseProps} />
        );

        expect(component).toMatchSnapshot();
    });

    describe('enhance', () => {
        it('mapStateToProps достает пропсы из стейта', () => {
            const props = mapStateToProps(state);

            expect(props).toEqual({
                name: 'name',
                lastname: 'lastname',
                jobPosition: 'jobPosition',
                description: 'description',
                id: 0,
            });
        });

        it('добавляет пропсы и обработчики', () => {
            const Enhanced = enhance(BaseComponent);

            mount(
                <Provider store={store}>
                    <Enhanced />
                </Provider>,
            );

            expect(BaseComponent.props).toEqual({
                openTable: expect.any(Function),
                openEmployeeEditDialog: expect.any(Function),
                updateEmployee: expect.any(Function),
                closeEmployeeEditDialog: expect.any(Function),
                name: 'name',
                lastname: 'lastname',
                jobPosition: 'jobPosition',
                description: 'description',
                id: 0,
            });
        });
    });
});
