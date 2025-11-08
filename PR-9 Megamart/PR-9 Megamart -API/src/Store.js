import { thunk } from "redux-thunk";
import { ReducerData } from "./Components/Services/Reducer/Reducer";
import { applyMiddleware, compose, createStore } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(ReducerData, composeEnhancers(applyMiddleware(thunk)));

export default Store;
