import * as actions from '../action/AuthAction'

const initialState = {
    isLogin: false,
    userToken: null,
    userInfo: null,
    error: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return Object.assign({}, state, action);
        case actions.LOGIN_FAIL:
            return Object.assign({}, state, action);
        case actions.LOGOUT_SUCCESS:
            return Object.assign({}, state, action);
        // return {
        //     ...state,
        //     error: action.error
        // }
        default:
            return state;
    }
}

export default authReducer;