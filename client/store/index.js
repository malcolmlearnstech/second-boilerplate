import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasks';
import usersReducer from './users';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const store = configureStore(
  { reducer: { tasksReducer, usersReducer } },
  applyMiddleware(thunk, createLogger())
);

export default store;
