// @flow

import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Button} from 'react-bootstrap';

import EmployeeTable from './Table';
import EmployeeAddModal from '../EmployeeAddModal';

import type {Employee} from '../../types';


type Props = {|
    openEmployeeAddDialog: () => void,
    closeEmployeeAddDialog: () => void,
    openEmployeeInfo: () => void,
    handleSubmit: ({employee: Employee, isNew: boolean}) => void,
    employees: Employee[],
|};

export default ({
    openEmployeeAddDialog,
    closeEmployeeAddDialog,
    handleSubmit,
    employees,
    openEmployeeInfo,
}: Props) => (
    <Container>
        <EmployeeTable employees={employees} openEmployeeInfo={openEmployeeInfo}/>
        <EmployeeAddModal onHide={() => closeEmployeeAddDialog()} handleSubmit={handleSubmit} />
        <Button onClick={() => openEmployeeAddDialog()}>
            Добавить
        </Button>
    </Container>
);

