export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGIN_SUCCESS';

export const login = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}

export function loginSuccess(token, userInfo) {
    return {
        type: LOGIN_SUCCESS,
        isLogin: true,
        userToken: token,
        userInfo: userInfo
    }
}

export function loginFail(error) {
    return {
        type: LOGIN_FAIL,
        error
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        isLogin: false,
        userToken: null,
        userInfo: null
    }
}

