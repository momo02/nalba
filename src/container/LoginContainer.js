import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as AuthAction from '../action/AuthAction';
import LoginScreen from '../screen/LoginScreen';

const LoginContainer = ({ navigation }) => {

    const { error } = useSelector(state => state.authReducer);
    const dispatch = useDispatch();

    const login = () => {
        //샘플 로그인 데이터
        const userInputData = {
            "cstmrName": "DAE HAN JI",
            "birthdyDt": "1986-05-13",
            "gender": "M",
            "eventCd": "EVENT_CD_1",
            "deviceToken": "TOKEN_T_00001",
            "deviceModel": "MODEL_T_00001"
        };

        dispatch(AuthAction.login(userInputData));
    }

    useEffect(() => {
        console.log('error >>>>', error);
    }, [error])

    return (
        <LoginScreen api={{ login }} data={null} />
    );
}

export default LoginContainer;