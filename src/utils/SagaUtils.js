import { Alert } from 'react-native';
import { call, put } from "redux-saga/effects";
import * as LoadingActions from "../action/LoadingAction";

export function* apiSaga(proc, action) {
    try {
        //로딩 show
        yield put(LoadingActions.showLoading());

        //전달된 로직 수행
        yield call(proc, action);

    } catch (error) {
        //에러 공통 처리 
        console.log('>>>>> error : ', error);
        Alert.alert('서버가 응답하지 않습니다.');

    } finally {
        //로딩 hide
        yield put(LoadingActions.hideLoading());
    }
}
