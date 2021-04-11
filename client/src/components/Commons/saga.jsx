import { takeEvery,call,put,all } from 'redux-saga/effects'

function* redirect(action){
    try{
        yield put({type:"AUTHENTICATE_USER",payload:true});
    } catch(err){
        yield put({type:'AUTHENTICATION_FAILED',message:'UNAUTHORIZED USER'});
    }
}

function* appSaga(){
    yield takeEvery("VERIFY_TOKEN",redirect);
}

export default function* rootSaga(){
    yield all([appSaga()]);
}