import { applyMiddleware, compose, createStore, Reducer, Store, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fireClickReducer, sagasFunction } from '../modules';

export default function   () {
  const reducer = {
    fireClick: fireClickReducer,
  }

  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

  const store = createStore(
    combineReducers(reducer),
    enhancer
  );

  sagaMiddleware.run(sagasFunction)

  return store;
}