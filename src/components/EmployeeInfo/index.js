// @flow

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect, useSelector} from 'react-redux';

import {Container, Row, Col, Button, Breadcrumb, Card} from 'react-bootstrap';

import {getEmployeeById} from '../../selectors';

import type {Employee} from '../../types';
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
|};

const EmployeeInfo = ({openTable, openEmployeeEditDialog, updateEmployee, closeEmployeeEditDialog}: Props) => {
    const {name, lastname, jobPosition, description, id} = useSelector(getEmployeeById);

    return (
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
                </Card.Body>
            </Card>

            <EmployeeEditModal
                handleSubmit={updateEmployee}
                onHide={closeEmployeeEditDialog}
                employee={{name, lastname, jobPosition, description, id}}
            />
        </Container>
    );
};

const mapDispatchToProps = dispatch => bindActionCreators({
    openEmployeeEditDialog,
    closeEmployeeEditDialog,
    updateEmployee,
    openTable,
}, dispatch);

const enhance = connect(null, mapDispatchToProps);

export default enhance(EmployeeInfo);
