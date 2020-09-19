// @flow

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button} from 'react-bootstrap';
import {Add} from '@material-ui/icons';

import EmployeeTable from './Table';
import EmployeeAddModal from '../EmployeeAddModal';

import type {Employee, State} from '../../types';
import {getEmployeeList} from '../../selectors';
import {
    closeEmployeeAddDialog,
    openEmployeeAddDialog,
    openEmployeeInfo,
    updateEmployee,
} from '../../actions';


type MappedProps = {|
    employees: Employee[],
|};

type Props = MappedProps & {|
    openEmployeeAddDialog: () => void,
    closeEmployeeAddDialog: () => void,
    openEmployeeInfo: () => void,
    updateEmployee: ({employee: Employee, isNew: boolean}) => void,
|};

const Table = ({
    openEmployeeAddDialog,
    closeEmployeeAddDialog,
    updateEmployee,
    employees,
    openEmployeeInfo,
}: Props) => (
    <Container>
        <EmployeeTable employees={employees} openEmployeeInfo={openEmployeeInfo}/>
        <EmployeeAddModal onHide={closeEmployeeAddDialog} handleSubmit={updateEmployee} />
        <Button variant="info" onClick={openEmployeeAddDialog}>
            Добавить <Add />
        </Button>
    </Container>
);

const mapStateToProps = (state: State): MappedProps => ({
    employees: getEmployeeList(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    openEmployeeAddDialog,
    closeEmployeeAddDialog,
    updateEmployee,
    openEmployeeInfo,
}, dispatch);

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(Table);
