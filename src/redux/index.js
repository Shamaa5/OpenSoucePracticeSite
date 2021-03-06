import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import repositories from './repositories';
import auth from './auth';
import userReducer from './userReducer';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  repositories: repositories,
  auth: auth,
  userReducer: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
