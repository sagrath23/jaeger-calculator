import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { reducers } from './calculator';
import rootSaga from '../sagas';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(applyMiddleware(sagaMiddleware))
  );
  // run rootSaga to handle side effects 
  sagaMiddleware.run(rootSaga);

  return store;
};
