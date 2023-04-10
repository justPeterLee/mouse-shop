import { all } from 'redux-saga/effects';
import mainStoreSaga from './main.store.saga';
export default function* rootSaga(){
    yield all([
        mainStoreSaga(),
        
    ])
}