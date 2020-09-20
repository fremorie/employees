import React from 'react';
import {mount} from 'enzyme';

import {Base} from '../';

const BaseProps = {
    handleSubmit: jest.fn(),
    onHide: jest.fn(),
    employee: {
        name: 'name',
        lastname: 'lastname',
        jobPosition: 'jobPosition',
        description: 'description',
        id: 0,
    },
    readonly: false,
};

describe('EmployeeForm', () => {
    it('в состоянии readonly=false рендерит кнопки "сохранить" и "отмена"', () => {
        const component = mount(
            <Base {...BaseProps} />
        );

        expect(component.find('button')).toHaveLength(2);
    });

    it('в состояни readonly не рендерит кнопки "сохранить" и "отмена"', () => {
        const component = mount(
            <Base {...{...BaseProps, readonly: true}} />
        );

        expect(component.find('button')).toHaveLength(0);
    });
});
