import { createLogger } from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import repositories from './repositories';
import auth from './auth';
import contacts from './contacts';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  repositories: repositories,
  auth: auth,
  contacts: contacts,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
