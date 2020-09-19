// @flow

import React from 'react';
import {useSelector} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron} from 'react-bootstrap';

import './styles.css';

import EmployeeTable from './components/EmployeeTable';
import EmployeeInfo from './components/EmployeeInfo';

import {getCurrentScreen} from './selectors';
import {SCREENS} from './constants';

const App = () => {
    const currentScreen = useSelector(getCurrentScreen);

    return (
        <>
            <Jumbotron>
                <h1>Список сотрудников</h1>
            </Jumbotron>

            {currentScreen === SCREENS.EMPLOYEE_INFO
                ? <EmployeeInfo />
                : <EmployeeTable/>
            }
        </>
    );
};

export default App;
