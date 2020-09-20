// @flow

import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {InputGroup, FormControl, Button, Modal, Form} from 'react-bootstrap';

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

    const [validated, setValidated] = useState(false);

    const onSubmit = event => {
        const form = event.currentTarget;
        // disables page refreshing
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);

            return;
        }

        handleSubmit({employee: {name, lastname, jobPosition, description, id}, isNew});
    };

    return (
        <Form
            noValidate
            validated={validated}
            onSubmit={onSubmit}>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label required>
                        Имя<span className="requiredField">*</span>
                    </Form.Label>
                    <FormControl
                        placeholder="Имя"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={e => setName(e.target.value)}
                        value={name}
                        readOnly={readonly}
                        required
                    />
                    <FormControl.Feedback type="invalid">
                        Это обязательное поле.
                    </FormControl.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                        Фамилия<span className="requiredField">*</span>
                    </Form.Label>
                    <FormControl
                        placeholder="Фамилия"
                        aria-label="LastName"
                        aria-describedby="basic-addon2"
                        onChange={e => setLastname(e.target.value)}
                        value={lastname}
                        readOnly={readonly}
                        required
                    />
                    <FormControl.Feedback type="invalid">
                        Это обязательное поле.
                    </FormControl.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>
                        Должность<span className="requiredField">*</span>
                    </Form.Label>
                    <FormControl
                        placeholder="Должность"
                        aria-label="JobPosition"
                        aria-describedby="basic-addon2"
                        onChange={e => setJobPosition(e.target.value)}
                        value={jobPosition}
                        readOnly={readonly}
                        required
                    />
                    <FormControl.Feedback type="invalid">
                        Это обязательное поле.
                    </FormControl.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Описание</Form.Label>
                    <FormControl
                        placeholder="Описание"
                        aria-label="Description"
                        aria-describedby="basic-addon2"
                        as="textarea" rows="3"
                        onChange={e => setDescription(e.target.value)}
                        value={description}
                        readOnly={readonly}
                    />
                </Form.Group>
            </Modal.Body>

            {!readonly && (
                <Modal.Footer>
                    <Button
                        variant="success"
                        type="submit"
                    >
                        Сохранить
                    </Button>
                    <Button variant="secondary" onClick={onHide}>
                        Отмена
                    </Button>
                </Modal.Footer>
            )}
        </Form>
    );
};

export default EmployeeForm;
