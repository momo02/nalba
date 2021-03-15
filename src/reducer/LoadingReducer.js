
import * as actions from '../action/LoadingAction'

const initialState = {
    isLoading: false,
}

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SHOW_LOADING:
            return Object.assign({}, state, action);
        case actions.HIDE_LOADING:
            return Object.assign({}, state, action);
        default:
            return state;
    }
}

export default loadingReducer;