import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import RepositoryReducer from './repositoryReducer';

export default history => combineReducers({
    router: connectRouter(history),
    repository: RepositoryReducer,
});
