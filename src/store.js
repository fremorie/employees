import {createStore} from 'redux';
import reducers from './reducers';
import {INITIAL_STATE} from './constants';

const persistedState = localStorage.getItem('reduxState')
    ? {...INITIAL_STATE, employees: JSON.parse(localStorage.getItem('reduxState')).employees}
    : INITIAL_STATE;

const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify({employees: store.getState().employees}));
});

export default function configureStore() {
    return store;
}
