import { all, fork, takeLatest, delay, put} from 'redux-saga/effects';
import {
  ADD_LIST_REQUEST, ADD_LIST_SUCCESS, ADD_LIST_FAILURE,
  REMOVE_LIST_REQUEST, REMOVE_LIST_SUCCESS, REMOVE_LIST_FAILURE, 
  ADD_CARD_REQUEST, ADD_CARD_SUCCESS, ADD_CARD_FAILURE,
} from '../reducers/board';

function* addList(action) {
  try {
    yield delay(1000);
    yield put({
      type: ADD_LIST_SUCCESS,
    })
  } catch (err) {
    yield delay(1000);
    yield put({
      type: ADD_LIST_FAILURE,
      error: action.err
    })
  }
}

function* removeList(action) {
  try{
    yield delay(1000);
    yield put({
      type: REMOVE_LIST_SUCCESS,
      data: action.data
    })
  } catch(err) {
    yield delay(1000);
    yield put({
      type: REMOVE_LIST_FAILURE,
      error: action.err
    })
  }
}

function* addCard(action) {
  try {
    yield delay(1000);
    yield put({
      type: ADD_CARD_SUCCESS,
      data: action.data,
    })
  } catch(err) {
    yield delay(1000)
    yield put({
      type: ADD_CARD_FAILURE,
      error: action.err
    })
  }
}

function* watchRemoveList() {
  yield takeLatest(REMOVE_LIST_REQUEST, removeList);
}

function* watchAddList() {
  yield takeLatest(ADD_LIST_REQUEST, addList)
}

function* watchAddCard() {
  yield takeLatest(ADD_CARD_REQUEST, addCard)
}

export default function* boardSaga() {
  yield all([
    fork(watchAddList),
    fork(watchRemoveList),
    fork(watchAddCard),
  ])
}