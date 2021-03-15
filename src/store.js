import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import authReducer from './reducer/AuthReducer';
import loadingReducer from './reducer/LoadingReducer'
// import pushNotiReducer from './reducer/PushNotiReducer';
// import fellowRedcuer from './reducer/FellowReducer';
// import selfHistReducer from './reducer/SelfHistReducer';
// import noticeReducer from './reducer/NoticeReducer';

//saga
import { spawn } from "redux-saga/effects";
import watchAuth from './saga/AuthSaga'

function* rootSaga() {
    yield spawn(watchAuth);
}

const rootReducer = combineReducers({
    authReducer, //: authReducer,
    loadingReducer,
    // pushNotiReducer: pushNotiReducer,
    // fellowReducer: fellowRedcuer,
    // selfHistReducer: selfHistReducer,
    // noticeReducer: noticeReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
export default store;