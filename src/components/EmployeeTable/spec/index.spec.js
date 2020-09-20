import React from 'react';
import {mount} from 'enzyme';

import {TableBody, EmployeeLine} from '../Table';
import EmptyTable from '../EmptyTable';

describe('EmployeeTable', () => {
    describe('EmptyTable', () => {
        it('рендерится', () => {
            const component = mount(
                <EmptyTable nCols={3} />
            );

            expect(component).toMatchSnapshot();
        });
    });

    describe('TableBody', () => {
        it('рендерится', () => {
            const props = {
                employees: [
                    {name: 'name', lastname: 'lastname', jobPosition: 'jobPosition', description: 'description', id: 1},
                    {name: 'name1', lastname: 'lastname1', jobPosition: 'jobPosition1', description: 'description1', id: 2},
                ],
                openEmployeeInfo: jest.fn(),
            };

            const component = mount(
                <TableBody {...props} />
            );

            expect(component.find('.employeeLine')).toHaveLength(2);
        });
    });

    describe('EmployeeLine', () => {
        it('рендерится', () => {
            const props = {
                name: 'name',
                lastname: 'lastname',
                jobPosition: 'jobPosition',
                orderNumber: 'orderNumber',
                onClick: jest.fn(),
            };

            const component = mount(
                <EmployeeLine {...props} />
            );

            expect(component.find('td')).toHaveLength(4);
            expect(component.find('tr')).toHaveLength(1);
        });
    });
});
