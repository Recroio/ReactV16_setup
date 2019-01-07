import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {fetchUser} from './App/landing/landing_saga';
import ACTION from './actionConstant';

export default function* saga() {
    yield takeEvery(ACTION.CHECK.LOAD, fetchUser);
  }