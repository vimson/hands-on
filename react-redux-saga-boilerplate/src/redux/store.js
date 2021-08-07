import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers";
import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(allReducers);
sagaMiddleware.run(rootSaga);

export default store;
