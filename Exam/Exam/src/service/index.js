import { combineReducers } from "redux";



import { blogReducer } from "./reduser/reduser";
import { authReducer } from "./reduser/authencatioReduser";

export const rootReducer = combineReducers({
  
  auth: authReducer,
  blog: blogReducer,  
});
