import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appModule from '../appModule';
import todoModule from '../todo/todoModule';
import initialState from './initialState';

const appReducer = combineReducers({
  appModule,
  todoModule
});

let middlewares;

if(process.env.NODE_ENV === 'production') {
  middlewares = applyMiddleware(thunk);
} else {
  middlewares = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(
  appReducer,
  initialState,
  middlewares
);

export default store;
