import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import promiseMiddleware from 'redux-promise-middleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const rootStore = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware())));
/* eslint-enable */

export default rootStore;
