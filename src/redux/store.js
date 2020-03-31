import { combineReducers } from "redux"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import thunkMiddleware from "redux-thunk"

import diaryR from "./diaryS"
import textboxR from "./textboxS"

const rootReducer = combineReducers({ diaryS: diaryR, textboxS: textboxR });
const store = configureStore({ reducer: rootReducer, middleware: [...getDefaultMiddleware(), thunkMiddleware] });

export default store;