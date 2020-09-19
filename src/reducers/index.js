import {combineReducers} from 'redux';

import modal from './modal';
import employees from './employees';
import screenManager from './screenManager';

export default combineReducers({
    employees,
    modal,
    screenManager,
});
