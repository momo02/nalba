import axios from 'axios';
//import { API_URL } from './../../config/ApiConfig';
import { Alert } from 'react-native';
import { getLoginToken, removeLoginToken } from './../storage';
// import { refReset } from './../../navigation/RootNavigationRef';
// import { isLoadingDispatch, isNotLoadingDispatch } from './../../reducer/AuthReducer';
// import store from './../../store';

// export const HOST = process.env.REACT_APP_HOST;
export const HOST = 'http://localhost:8888/api/';//API_URL;

const clientInstance = axios.create({
    baseURL: HOST,
    timeout: 10000
});

clientInstance.interceptors.request.use(
    async (config) => {
        // store.dispatch(isLoadingDispatch());
        console.log("URL >>>" + config.url);
        config.headers['Authorization'] = await getLoginToken()
        return config;

    },
    error => {
        return Promise.reject(error);
    }
);

clientInstance.interceptors.response.use(
    response => {
        // store.dispatch(isNotLoadingDispatch());
        // //console.log(">>>>>> resp : ", response);
        return response;
    },

    error => {
        // console.error("status >>>> " + JSON.stringify(error.response.status));
        // store.dispatch(isNotLoadingDispatch());
        // console.error(">>>>>> error : ", error);
        // console.log(">>>>>> error.response.data : ", error.response.data);

        // if (error.response.data.error === '420') { //토큰 불일치 (동일 아이디로 다른 기기 로그인)
        //     removeLoginToken();
        // }
        // // console.error(error.message);
        // // console.error(error.name);
        // // const message = error.message || '';
        // // const name = error.name || '';
        // if (error.message.startsWith('timeout')) {
        //     Alert.alert('서버가 응답하지 않습니다.');
        // } else if (error.response.status == 401) {
        //     refReset('SignNavigation');
        // }

        return Promise.reject(error);
    });

export default clientInstance;

