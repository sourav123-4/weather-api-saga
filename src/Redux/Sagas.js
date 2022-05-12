import { call, put, takeEvery, takeLatest} from "redux-saga/effects";

import { RECEIVE_API_DATA, REQUEST_API_DATA, receiveApiData} from "./ActionTypes";
import {fetchData}  from './Api';

function* getApiData({payload:value}){
    try{
        const data=yield call(fetchData,value);
        yield put(receiveApiData(data));
    }catch(e){
        console.log(e);
    }
}

export default function* mySaga(){
    yield takeLatest(REQUEST_API_DATA,getApiData);
}
