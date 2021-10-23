import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { hotels } from "./hotelsReducer";

export const rootReducer = combineReducers({ auth, hotels });
