import { all } from 'redux-saga/effects';
import { watchsendOperation } from './calculatorSagas';

export default function* rootSaga() {
  yield all([watchsendOperation()]);
}
