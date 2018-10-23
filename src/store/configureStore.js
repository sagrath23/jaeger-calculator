import { createStore } from 'redux';
import { reducers } from './calculator';


export default function configureStore(initialState) {
 return createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), initialState);
};
