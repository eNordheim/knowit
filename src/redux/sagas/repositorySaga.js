import { put, call, takeLatest } from 'redux-saga/effects';
import { get } from '../../config/apiConfig';
import { GET_GITHUB_MOST_POPULAR } from '../../constants/endpoints';
import * as actions from '../actions/repositoryActions';


function* fetchRepositoryList() {
    try {
        const { data } = yield call(get, GET_GITHUB_MOST_POPULAR);
        yield put(actions.fetchRepositorySuccess(data));
    } catch (error) {
        yield put(actions.fetchRepositoryError(error.message));
    }
}

export default [
    takeLatest(actions.FETCH_REPOSITORY_LIST_REQUEST, fetchRepositoryList),
];
