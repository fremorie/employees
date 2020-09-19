// @flow

import React from 'react';
import {useSelector} from 'react-redux';

import {Container, Row, Col, Button} from 'react-bootstrap';

import {getEmployeeById} from '../../selectors';

import EmployeeEditModal from '../EmployeeEditModal';
import type {Employee} from "../../types";

type Props = {|
    openTable: () => void,
    openEditModal: () => void,
    updateEmployee: ({employee: Employee, isNew: boolean}) => void,
    closeEmployeeEditDialog: () => void,
|};

const EmployeeInfo = ({openTable, openEditModal, updateEmployee, closeEmployeeEditDialog}: Props) => {
    const {name, lastname, jobPosition, description, id} = useSelector(getEmployeeById);

    return (
        <Container>
            <Button onClick={openTable}>
                Back to Table
            </Button>
            <Row>
                <Col>Имя</Col>
                <Col>{name}</Col>
            </Row>
            <Row>
                <Col>Фамилия</Col>
                <Col>{lastname}</Col>
            </Row>
            <Row>
                <Col>Должность</Col>
                <Col>{jobPosition}</Col>
            </Row>
            <Row>
                <Col>Описание</Col>
                <Col>{description}</Col>
            </Row>

            <Button onClick={openEditModal}>
                Редактировать
            </Button>

            <EmployeeEditModal
                handleSubmit={updateEmployee}
                onHide={closeEmployeeEditDialog}
                employee={{name, lastname, jobPosition, description, id}}
            />
        </Container>
    );
};

export default EmployeeInfo;
