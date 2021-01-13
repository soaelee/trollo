import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import { TEST, TEST_SUCCESS, TEST_FAILURE } from '../reducers/user';

function* test() {
  try {
    yield delay(1000);
    yield put({ //dispatch
      type: TEST_SUCCESS,
    })
  } catch(err) {
    yield put({
      type: TEST_FAILURE
    })
  }
}
function* watchTest() {
  yield takeLatest(TEST, test);
}
export default function* userSaga() {
  yield all([
    fork(watchTest),
  ])
}