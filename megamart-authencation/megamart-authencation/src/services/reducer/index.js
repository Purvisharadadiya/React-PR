// services/reducer/index.js (or rootReducer.js)
import { combineReducers } from "redux";
import { authReducer } from "./authencationReduser";
import { productReducer } from "./productReduser";

export const rootReducer = combineReducers({
  product: productReducer,  
  auth: authReducer,
});
