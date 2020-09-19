// @flow

import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {Modal, Button, InputGroup} from 'react-bootstrap';

import {isEmployeeAddModalOpen} from '../../selectors';

import EmployeeForm from '../EmployeeForm';
import type {Employee} from '../../types';

type Props = {|
    handleSubmit: ({employee: Employee, isNew: boolean}) => void,
    onHide: () => void,
|};

const EmployeeAddModal = ({onHide, handleSubmit}: Props) => {
    const isOpen = useSelector(isEmployeeAddModalOpen);

    return (
        <Modal show={isOpen} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавление нового сотрудника</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EmployeeForm onHide={onHide} handleSubmit={handleSubmit}/>
            </Modal.Body>
        </Modal>
    );
};

export default EmployeeAddModal;
