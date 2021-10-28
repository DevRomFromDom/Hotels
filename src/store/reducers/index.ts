import { favorites } from './favoritesReducer';
import { combineReducers } from "redux";
import { auth } from "./authReducer";
import { searchOptions } from "./searchOptionsReducer";
import { hotels } from "./hotelsReducer";


export const rootReducer = combineReducers({ auth, hotels, searchOptions, favorites });
