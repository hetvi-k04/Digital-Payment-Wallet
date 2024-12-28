import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import walletReducer from './reducers/walletReducer';

// Combine all reducers
const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

// Create the store with middlewares
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
