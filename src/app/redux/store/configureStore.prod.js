// @flow weak

import {
  createStore,
  applyMiddleware,
  compose
}                         from 'redux';
import thunkMiddleware    from 'redux-thunk';
import reducer            from '../modules/reducers';
import { apolloClient }   from '../../services/apollo';


// createStore : enhancer
const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    apolloClient.middleware()  // apollo middleware
  )
);

// export default =  "redux store"
export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}

