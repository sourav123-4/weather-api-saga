import { createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import {rootReducers} from "./Root-reducer";
import mySaga from "./Sagas";

const saaMiddleware= createSagaMiddleware();

export default createStore(rootReducers, applyMiddleware(saaMiddleware));
saaMiddleware.run(mySaga);