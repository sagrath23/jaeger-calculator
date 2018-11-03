import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from '../store/calculator/calculatorActions';
import { doOperation } from '../services';

//TODO: add tests to sagas
export function* sendOperation(action) {
    const requestResult = yield call(doOperation, action.payload.size, action.payload.offset);
    
    console.log(requestResult, 'result');

    yield put(actions.showResult(requestResult.body));
}

// Our watcher Saga: spawn a new sendOperation task on each LOAD_LIST_ACTION
export function* watchsendOperation() {
    yield takeEvery(actions.executeOperation, sendOperation);
}