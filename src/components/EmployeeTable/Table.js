// @flow

import React from 'react';

import {Table} from 'react-bootstrap';

import type {Employee} from '../../types';

const TableHeader = () => (
    <thead>
        <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Должность</th>
        </tr>
    </thead>
);

type EmployeeLineProps = {
    name: string,
    lastname: string,
    jobPosition: string,
    description?: string,
    orderNumber: number,
    onClick: () => void,
}

const EmployeeLine = ({
    name,
    lastname,
    jobPosition,
    orderNumber,
    onClick,
}: EmployeeLineProps) => (
    <tr onClick={onClick}>
        <td>{orderNumber}</td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{jobPosition}</td>
    </tr>
);

type Props = {|
    employees: Employee[],
    openEmployeeInfo: ({id: number}) => void,
|};

const EmployeeTable = ({employees, openEmployeeInfo}: Props) => (
    <Table bordered striped hover variant="dark">
        <TableHeader />
        <tbody>
            {employees.map(({name, lastname, jobPosition, id}, i) =>
                <EmployeeLine
                    name={name}
                    lastname={lastname}
                    jobPosition={jobPosition}
                    orderNumber={i + 1}
                    onClick={() => openEmployeeInfo({id})}
                    key={id}
                />
            )}
        </tbody>
    </Table>
);

export default EmployeeTable;
