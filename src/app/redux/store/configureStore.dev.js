import {
  createStore,
  // compose,
  combineReducers,
  applyMiddleware
}                               from 'redux';
import { routerReducer }        from 'react-router-redux';
import createLogger             from 'redux-logger';
import thunkMiddleware          from 'redux-thunk';
import * as reducers            from '../modules/reducers';
import { apolloClient }         from '../../services/apollo';
import { composeWithDevTools }  from 'redux-devtools-extension';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
// NOTE: use now https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    apolloClient.middleware(), // apollo middleware
    loggerMiddleware
  )
);

// combine reducers -> createStore reducer
const reducer = combineReducers({
  ...reducers,
  apollo: apolloClient.reducer(), // apollo reducer
  routing: routerReducer
});

// export default = "redux store"
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer);
  module.hot.accept('../modules/reducers', () =>
    store.replaceReducer(require('../modules/reducers').default)
  );
  return store;
}

// export "apollo client"
export const client = apolloClient;
