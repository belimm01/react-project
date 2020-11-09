import {combineReducers} from "redux";
import {projectReducer} from "./project.reducer";

export const rootReducer = combineReducers({
    projects: projectReducer
})