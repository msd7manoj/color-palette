import { applyMiddleware, createStore } from "redux";
import freeze from "redux-freeze";
import appReducer from "./appReducer";
import createSagaMiddleware from 'redux-saga';
import appSaga from "./appSaga";

const sagaMiddleware = createSagaMiddleware();


const createStoreWithMiddleware = applyMiddleware(freeze, sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Running Application Root Saga
sagaMiddleware.run(appSaga)

export default store;
