import { put, takeLatest } from 'redux-saga/effects'
// import translate from '@i18n'
import { ExampleActionTypes } from '@types'
import { BaseApi } from '@api'

function* doVerifyClient(action) {
  // try {
  //   const portals = yield authApi.checkLearnerDomain(action.email)
  //   if (portals && portals.length === 0) {
  //     // yield put({ type: ExampleActionTypes.VERIFY_CLIENT_FAIL, error: translate('error.emailIsNotRegistered') })
  //   } else {
  //     yield put({ type: ExampleActionTypes.VERIFY_CLIENT_SUCCESS, portals })
  //   }
  // } catch (error) {
  //   // yield put({ type: FallbackTypes.FALLBACK_ERROR, action })
  //   yield put({ type: ExampleActionTypes.VERIFY_CLIENT_FAIL, error })
  // }
}

function* verifyEmail() {
  yield takeLatest(ExampleActionTypes.VERIFY_CLIENT, doVerifyClient)
}

function* doLogout() {
  yield put({ type: ExampleActionTypes.LOGOUT_SUCCEED })
}

function* logout() {
  yield takeLatest(ExampleActionTypes.LOGOUT_REQUEST, doLogout)
}

export default [
  verifyEmail(),
  logout(),
]
