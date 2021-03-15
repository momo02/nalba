import AsyncStorage from '@react-native-async-storage/async-storage';

const LOGIN_TOKEN = "userToken";
const PUSH_TOEKN = "pushToken";
const APP_USED = "isAppUsed";
const OS_NAME = "osName";
const HEAD_FLG = "Safety-Tour ";

// AsyncStorage 저장 처리
export const setLoginToken = async (token) => {
    await AsyncStorage.setItem(LOGIN_TOKEN, HEAD_FLG + token);
}
export const setPushToken = async (token) => {
    await AsyncStorage.setItem(PUSH_TOEKN, token);
}
export const setIsAppUsed = async (value) => {
    await AsyncStorage.setItem(APP_USED, value);
}
export const setOsName = async (osName) => {
    await AsyncStorage.setItem(OS_NAME, osName);
}

// AsyncStorage 조회 처리
export const getLoginToken = async () => {
    return await AsyncStorage.getItem(LOGIN_TOKEN);
}

export const getPushToken = async () => {
    return await AsyncStorage.getItem(PUSH_TOEKN);
}

export const getIsAppUsed = async () => {
    return await AsyncStorage.getItem(APP_USED);
}
export const getOsName = async () => {
    return await AsyncStorage.getItem(OS_NAME);
}

// AsyncStorage 삭제 처리
export const removeLoginToken = async () => {
    await AsyncStorage.removeItem(LOGIN_TOKEN);
}

export const removePushToken = async () => {
    await AsyncStorage.removeItem(PUSH_TOEKN);
}