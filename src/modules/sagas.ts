import { call, put, takeEvery } from 'redux-saga/effects';
import { fireClickAction } from './Home'

const getResponse = () => fetch('https://api.agify.io/?name=michael')
.then(response => response.json());


function* handleFireClick({ payload }) {
    console.log("Hello From Saga");
    const response = yield call(getResponse);
    console.log(response);
    yield put(fireClickAction.success({
        response,
        message: 'Action Received',
        loading: false,
    }))
}

export function* sagasFunction() {
    yield takeEvery(fireClickAction.trigger, handleFireClick);
}