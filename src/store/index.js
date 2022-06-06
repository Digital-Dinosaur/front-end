import { configureStore, combineReducers } from '@reduxjs/toolkit';
import graphSlice from './graph';
import { composeWithDevTools } from 'redux-devtools-extension';
import authSlice from './auth';
import profileSlice from './profile';

let reducers = combineReducers({
  graph: graphSlice.reducer,
  auth: authSlice.reducer,
  profile: profileSlice.reducer,
});

export default configureStore({ reducer: reducers }, composeWithDevTools());
