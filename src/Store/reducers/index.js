import { combineReducers } from "@reduxjs/toolkit";
import database from "./database.slice";

const rootReducer = combineReducers({
   db: database
});
export default rootReducer;