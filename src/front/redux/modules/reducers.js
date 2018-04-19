// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import views from './views';
import userAuth from './userAuth';

const appReducers = {
  views,
  userAuth,
};

// combine reducers -> createStore reducer
const reducers = combineReducers({
  ...appReducers,
  routing: routerReducer,
});

export default reducers;
