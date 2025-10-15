import { thunk } from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { productReducer } from '../srvices/reducer/reducer';

// const store = creatStore(productReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(productReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
