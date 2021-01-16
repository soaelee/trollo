import { all, fork, takeLatest, delay, put } from 'redux-saga/effects';
import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE 
} from '../reducers/user';

function* login(action) {
  try {
    yield delay(1000);
    yield put({ //dispatch
      type: LOGIN_SUCCESS,
      data: action.data
    })
  } catch(err) {
    yield put({
      type: LOGIN_FAILURE,
      error: "비밀번호를 다시 입력해주세요."
    })
  }
}
function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}
export default function* userSaga() {
  yield all([
    fork(watchLogin),
  ])
}