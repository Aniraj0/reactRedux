import { legacy_createStore as createStore, combineReducers, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagaMiddleware from 'redux-saga';

import cakeReducer from './cake/CakeReducer';
import IceCreamReducer from './cake/IceCreamReducer';

const rootReducer = combineReducers({
  cakeReducer,
  IceCreamReducer,

  // cake: cakeReducer,
  // iceCream: IceCreamReducer
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware()),
  // other store enhancers if any
));

export default store;