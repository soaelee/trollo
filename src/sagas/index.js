import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import boardSaga from './board';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(boardSaga),
  ]);
}