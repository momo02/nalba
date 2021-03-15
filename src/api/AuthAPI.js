import axios from '../utils/AxiosUtils';

const API_URL = 'http://localhost:8888/api';

const CHECK_USER_URL = `${API_URL}/com/auth/cstmr/check`;
const LOGIN_URL = `${API_URL}/com/auth/cstmr/login`;
const GET_USER_INFO_BY_TOKEN = `${API_URL}/com/auth/cstmr/find-id-user-by-token`;
const LOGOUT_URL = `${API_URL}/com/auth/cstmr/logout`;

/**
 * 유저 가입 여부 체크
 * @param {*} payload 
 */
export const checkUser = async (payload) => {
    const { data } = await axios.post(CHECK_USER_URL, payload);
    console.log('>>>>> checkUser res : ', data);
    return data;
}

/**
 * 로그인 
 * @param {*} payload 
 */
export const login = async (payload) => {
    //const { data } = yield call([axios, 'post'], LOGIN_URL, payload);
    const { data } = await axios.post(LOGIN_URL, payload);
    console.log('>>>>> login res : ', data);
    return data;
}

/**
 * 로그인 토큰으로 유저 정보 조회 
 */
export const getUserInfoByToken = async () => {
    //const { data } = yield call([axios, 'get'], GET_USER_INFO_BY_TOKEN);
    const { data } = await axios.get(GET_USER_INFO_BY_TOKEN);
    console.log(">>>>> userInfo : ", data.body);
    return data;
}

/**
 * 로그아웃
 */
export const logout = async () => {
    const { data } = await axios.get(LOGOUT_URL);
    console.log(">>>>> logout res : ", data);
    return data;
}