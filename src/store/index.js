import { compose, createStore, applyMiddleware } from 'redux';
// import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from '../redux';

const middleware = [thunk, logger];

const storeEnhancers = compose(applyMiddleware(...middleware));

const store = createStore(createRootReducer(), storeEnhancers);

export default store;
