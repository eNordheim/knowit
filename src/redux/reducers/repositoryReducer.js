import { FETCH_REPOSITORY_LIST_ERROR, FETCH_REPOSITORY_LIST_REQUEST, FETCH_REPOSITORY_LIST_SUCCESS } from '../actions/repositoryActions';

const intitialState = {
    isFetching: false,
    errorMessage: '',
    pages: [],
};

function RepositoryReducer(prevState = intitialState, action) {
    switch (action.type) {
        case FETCH_REPOSITORY_LIST_REQUEST:
            return {
                ...intitialState,
                isFetching: true,
            };
        case FETCH_REPOSITORY_LIST_SUCCESS:
            return {
                ...intitialState,
                pages: action.payload.items,
            };
        case FETCH_REPOSITORY_LIST_ERROR:
            return {
                ...intitialState,
                errorMessage: action.errorMessage,
            };
        default:
            return prevState;
    }
}

export default RepositoryReducer;
