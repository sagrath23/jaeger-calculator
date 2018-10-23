import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CalculatorContainer from './CalculatorContainer';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore();

const components = (
  <Provider store={store}>
    <CalculatorContainer />
  </Provider>
);

ReactDOM.render(components, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
