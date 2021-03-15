import { call, put, takeEvery } from "redux-saga/effects";
import * as AuthActions from "../action/AuthAction";
import * as AuthAPI from '../api/AuthAPI';
import * as Storage from '../storage';
import { apiSaga } from '../utils/SagaUtils';

function* fetchAuthLogin(action) {

    console.log('>>>>> action : ', action);

    const { payload } = action;

    // 1. 유저 가입 여부 체크 
    const resChckUsr = yield call(AuthAPI.checkUser, payload);

    // TODO 추후 응답 성공 및 에러에 대한 응답데이터는 변경될 수 있음.
    if (resChckUsr.error === "00000") {
        if (resChckUsr.body.joinYn === 'Y') {
            // 2-1. 가입했을 경우, 로그인 요청             
            const resLogin = yield call(AuthAPI.login, payload);

            if (resLogin.error === "00000") {
                const loginToken = resLogin.body.token;
                console.log(">>>>> LoginToken : ", loginToken);
                // 3. 로그인 성공 시 AsyncStorage 에 로그인 토큰 저장
                yield call(Storage.setLoginToken, loginToken);
                // 4. 유저정보 조회 및 redux 저장
                const resUserInfo = yield call(AuthAPI.getUserInfoByToken);
                // redux 저장
                yield put(AuthActions.loginSuccess(loginToken, resUserInfo.body));
            }

        } else {
            // 2-2. 가입안했을 경우.
            // 기존 로직은 약관동의 페이지로 이동시켜 회원가입 유도 
        }
    }

}


function* fetchAuthLogout(action) {
    console.log('>>>>> action : ', action);

    const resLogout = yield call(AuthAPI.logout);
    if (resLogout.error === "00000") {
        // redux 저장
        yield put(AuthActions.logoutSuccess());
    }
}


export default function* watchAuth() {
    // yield takeEvery(AuthActions.LOGIN, fetchAuthLogin);
    // yield takeEvery(AuthActions.LOGOUT, fetchAuthLogout);
    yield takeEvery(AuthActions.LOGIN, apiSaga, fetchAuthLogin);
    yield takeEvery(AuthActions.LOGOUT, apiSaga, fetchAuthLogout);
}

