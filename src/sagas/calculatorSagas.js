import { put, takeEvery, call, select } from 'redux-saga/effects';
import * as actions from '../store/calculator/calculatorActions';
import { doOperation } from '../services';

const getCalculatorState = (state) => (state);

//TODO: add tests to sagas
export function* sendOperation(action) {
    const state = yield select(getCalculatorState);
    const requestResult = yield call(doOperation, state);
    const operationResult = JSON.parse(requestResult.text).result;
    
    yield put(actions.showResult(operationResult));
}

// Our watcher Saga: spawn a new sendOperation task on each LOAD_LIST_ACTION
export function* watchsendOperation() {
    yield takeEvery(actions.executeOperation, sendOperation);
}
