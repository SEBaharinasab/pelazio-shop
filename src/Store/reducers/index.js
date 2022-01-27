import { combineReducers } from "@reduxjs/toolkit";
import database from "./database.slice";
import theme from "./theme.slice";

const rootReducer = combineReducers({
   db: database,
   theme: theme,
});
export default rootReducer;