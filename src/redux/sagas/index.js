import { all } from 'redux-saga/effects';
import repositorySaga from './repositorySaga';


export default function* rootSaga() {
    yield all([
        ...repositorySaga,
    ]);
}
