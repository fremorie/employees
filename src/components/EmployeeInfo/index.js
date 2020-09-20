// @flow

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {Container, Button, Breadcrumb, Card} from 'react-bootstrap';

import {getEmployeeById} from '../../selectors';

import type {Employee, State} from '../../types';
import {
    closeEmployeeEditDialog,
    openEmployeeEditDialog,
    openTable,
    updateEmployee,
} from '../../actions';

import EmployeeEditModal from '../EmployeeEditModal';

type Props = {|
    openTable: () => void,
    openEmployeeEditDialog: () => void,
    updateEmployee: ({employee: Employee, isNew: boolean}) => void,
    closeEmployeeEditDialog: () => void,
|} & Employee;

const EmployeeInfo = ({
    openTable,
    openEmployeeEditDialog,
    updateEmployee,
    closeEmployeeEditDialog,
    name,
    lastname,
    description,
    jobPosition,
    id,
}: Props) => (
    <Container>
        <Breadcrumb>
            <Breadcrumb.Item onClick={openTable}>Список сотрудников</Breadcrumb.Item>
            <Breadcrumb.Item active>{name} {lastname}</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
            <Card.Body>
                <Card.Title>{name} {lastname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Должность: {jobPosition}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="info" onClick={openEmployeeEditDialog}>
                    Редактировать
                </Button>
                {' '}
                <Button variant="secondary" onClick={openTable}>
                    Вернуться к списку
                </Button>
            </Card.Body>
        </Card>

        <EmployeeEditModal
            handleSubmit={updateEmployee}
            onHide={closeEmployeeEditDialog}
            employee={{name, lastname, jobPosition, description, id}}
        />
    </Container>
);

export {EmployeeInfo as Base};

export const mapDispatchToProps = (dispatch: Function) => bindActionCreators({
    openEmployeeEditDialog,
    closeEmployeeEditDialog,
    updateEmployee,
    openTable,
}, dispatch);

export const mapStateToProps = (state: State): Employee => {
    const {name, lastname, jobPosition, description, id} = getEmployeeById(state);

    return {name, lastname, jobPosition, description, id};
};

export const enhance = connect(mapStateToProps, mapDispatchToProps);

export default enhance(EmployeeInfo);
