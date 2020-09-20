// @flow

import React, {useState} from 'react';

import {Table} from 'react-bootstrap';

import {Edit} from '@material-ui/icons';

import type {Employee} from '../../types';

import EmptyTable from './EmptyTable';

const TableHeader = () => (
    <thead>
        <tr>
            <th></th>
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

export const EmployeeLine = ({
    name,
    lastname,
    jobPosition,
    orderNumber,
    onClick,
}: EmployeeLineProps) => (
    <tr
        onClick={onClick}
        className="employeeLine"
    >
        <td width="50px">
            <span className="editIcon"><Edit fontSize="small" /></span>
            <span className="orderNumber">{orderNumber}</span>
        </td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{jobPosition}</td>
    </tr>
);

type Props = {|
    employees: Employee[],
    openEmployeeInfo: (id: number) => void,
|};

export const TableBody = ({employees, openEmployeeInfo}: Props) => (
    <>
        {employees.map(({name, lastname, jobPosition, id}, i) =>
            (<EmployeeLine
                name={name}
                lastname={lastname}
                jobPosition={jobPosition}
                orderNumber={i + 1}
                onClick={() => openEmployeeInfo(id)}
                key={id}
            />)
        )}
    </>
);

const EmployeeTable = ({employees, openEmployeeInfo}: Props) => (
    <Table bordered striped hover variant="dark" responsive="sm">
        <TableHeader />
        <tbody>
            {employees.length
                ? <TableBody employees={employees} openEmployeeInfo={openEmployeeInfo} />
                : <EmptyTable nCols={4} />}
        </tbody>
    </Table>
);

export {EmployeeTable as Base};

export default EmployeeTable;
