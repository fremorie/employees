import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {INITIAL_STATE} from './constants';

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : INITIAL_STATE;

const store = createStore(
    reducers,
    persistedState,
    //applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default function configureStore() {
    return store;
}
