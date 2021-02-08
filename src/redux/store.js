import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './sagas';
import createReducer from './reducers';

const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}, history) => {
    const middleware = [
        sagaMiddleware,
        routerMiddleware(history),
    ];

    if (process.env.NODE_ENV === 'development') {
        const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }

    const composedEnhancers = compose(
        applyMiddleware(...middleware),
        ...enhancers,
    );

    const store = createStore(
        createReducer(history),
        initialState,
        composedEnhancers,
    );

    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;
