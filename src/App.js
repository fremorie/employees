// @flow

import React from 'react';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

import {
    openEmployeeAddDialogAction,
    closeEmployeeAddDialogAction,
    openEmployeeEditDialogAction,
    closeEmployeeEditDialogAction,
    updateEmployeeAction,
    openEmployeeInfoAction,
    openTableAction,
} from './actions';

import EmployeeTable from './components/EmployeeTable';
import EmployeeInfo from './components/EmployeeInfo';

import type {State, Employee, Screen} from './types';
import {SCREENS} from './constants';
import {getEmployeeList} from './selectors';

type MappedProps = {|
    employees: Employee[],
    currentScreen: Screen,
|};

type Props = MappedProps & {|
    openEmployeeAddDialog: () => void,
    closeEmployeeAddDialog: () => void,
    closeEmployeeEditDialog: () => void,
    openEmployeeEditDialog: () => void,
    openEmployeeInfo: () => void,
    handleSubmit: ({employee: Employee, isNew: boolean}) => void,
    openTable: () => void,
|};

const App = ({
    openEmployeeAddDialog,
    closeEmployeeAddDialog,
    closeEmployeeEditDialog,
    openEmployeeEditDialog,
    handleSubmit,
    employees,
    openEmployeeInfo,
    currentScreen,
    openTable,
}: Props) => {
    if (currentScreen === SCREENS.EMPLOYEE_INFO) {
        return (
            <EmployeeInfo
                openTable={openTable}
                openEditModal={() => openEmployeeEditDialog()}
                updateEmployee={handleSubmit}
                closeEmployeeEditDialog={closeEmployeeEditDialog}
            />
        );
    }

    return (
            <EmployeeTable
                openEmployeeAddDialog={openEmployeeAddDialog}
                closeEmployeeAddDialog={closeEmployeeAddDialog}
                handleSubmit={handleSubmit}
                employees={employees}
                openEmployeeInfo={openEmployeeInfo}
            />
    );
};

const mapStateToProps = (state: State): MappedProps => ({
    employees: getEmployeeList(state),
    currentScreen: state.screenManager.currentScreen,
});

const mapDispatchToProps = dispatch => ({
    openEmployeeAddDialog: () => dispatch(openEmployeeAddDialogAction()),
    closeEmployeeAddDialog: () => dispatch(closeEmployeeAddDialogAction()),
    openEmployeeEditDialog: () => dispatch(openEmployeeEditDialogAction()),
    closeEmployeeEditDialog: () => dispatch(closeEmployeeEditDialogAction()),

    handleSubmit: employee => dispatch(updateEmployeeAction(employee)),
    openEmployeeInfo: ({id}) => dispatch(openEmployeeInfoAction(id)),
    openTable: () => dispatch(openTableAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
