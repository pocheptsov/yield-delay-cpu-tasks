/* eslint-disable no-constant-condition */

import { put, takeEvery, delay, call } from 'redux-saga/effects'

function fibo(n) {
  if (n < 2) return 1
  else return fibo(n - 2) + fibo(n - 1)
}

export function* incrementAsync() {
  let count = 43,
    log = (num) => console.log(`${num}: ${new Date()}`)

  log('1')
  yield call(fibo, count)
  log('2')
  yield delay(3000)
  yield put({ type: 'INCREMENT' })

  log('3')
  yield call(fibo, count)
  log('4')
  yield put({ type: 'INCREMENT' })
  // yield put({ type: 'INCREMENT' });
}

export default function* rootSaga() {
  yield takeEvery('INCREMENT', incrementAsync)
}
