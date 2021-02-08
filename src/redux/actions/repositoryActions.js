// Action-types
export const FETCH_REPOSITORY_LIST_REQUEST = 'FETCH_REPOSITORY_LIST_REQUEST';
export const FETCH_REPOSITORY_LIST_SUCCESS = 'FETCH_REPOSITORY_LIST_SUCCESS';
export const FETCH_REPOSITORY_LIST_ERROR = 'FETCH_REPOSITORY_LIST_ERROR';


// Action-creators
export const fetchRepositoryRequest = () => ({
    type: FETCH_REPOSITORY_LIST_REQUEST,
});

export const fetchRepositorySuccess = data => ({
    type: FETCH_REPOSITORY_LIST_SUCCESS,
    payload: data,
});

export const fetchRepositoryError = errorMessage => ({
    type: FETCH_REPOSITORY_LIST_ERROR,
    errorMessage,
});
