// @flow

import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {InputGroup, FormControl, Button, Modal} from 'react-bootstrap';

import {getNextEmployeeId} from '../../selectors';
import type {Employee} from '../../types';

type Props = {|
    handleSubmit: ({employee: Employee, isNew: boolean}) => void,
    onHide: () => void,
    employee?: Employee,
    readonly?: boolean,
|};

const EmployeeForm = ({handleSubmit, onHide, employee, readonly}: Props) => {
    const isNew = !employee;

    // $FlowIgnore
    const id = isNew ? useSelector(getNextEmployeeId) : employee.id;

    const [name, setName] = useState(employee?.name || '');
    const [lastname, setLastname] = useState(employee?.lastname || '');
    const [jobPosition, setJobPosition] = useState(employee?.jobPosition || '');
    const [description, setDescription] = useState(employee?.description || '');

    return (
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Имя"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    readOnly={readonly}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Фамилия"
                    aria-label="LastName"
                    aria-describedby="basic-addon2"
                    onChange={e => setLastname(e.target.value)}
                    value={lastname}
                    readOnly={readonly}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Должность"
                    aria-label="JobPosition"
                    aria-describedby="basic-addon2"
                    onChange={e => setJobPosition(e.target.value)}
                    value={jobPosition}
                    readOnly={readonly}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Описание"
                    aria-label="Description"
                    aria-describedby="basic-addon2"
                    as="textarea" rows="3"
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    readOnly={readonly}
                />
            </InputGroup>

            {!readonly && (
                <Modal.Footer>
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={() => handleSubmit({employee: {name, lastname, jobPosition, description, id}, isNew})}
                    >
                        Сохранить
                    </Button>
                    <Button variant="secondary" onClick={onHide}>
                        Отмена
                    </Button>
                </Modal.Footer>
            )}
        </>
    );
};

export default EmployeeForm;
