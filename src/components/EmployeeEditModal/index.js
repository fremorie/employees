// @flow

import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {Modal, Button, InputGroup} from 'react-bootstrap';

import {isEmployeeEditModalOpen} from '../../selectors';
import type {Employee} from '../../types';

import EmployeeForm from '../EmployeeForm';

type Props = {|
    handleSubmit: ({employee: Employee, isNew: boolean}) => void,
    onHide: () => void,
    employee: Employee,
|};

const EmployeeEditModal = ({onHide, handleSubmit, employee}: Props) => {
    const isOpen = useSelector(isEmployeeEditModalOpen);

    return (
        <Modal show={isOpen} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EmployeeForm onHide={onHide} handleSubmit={handleSubmit} employee={employee} />
            </Modal.Body>
        </Modal>
    );
};

export default EmployeeEditModal;
