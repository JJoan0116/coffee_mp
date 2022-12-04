import { combineReducers } from 'redux';

import cart from './cart';

const createRootReducer = () =>
  combineReducers({
    cart,
  });

export default createRootReducer;
