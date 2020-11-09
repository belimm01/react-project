import {combineReducers} from "redux";
import {projectReducer} from "./project.reducer";
import {appReducer} from "./app.reducer";

export const rootReducer = combineReducers({
    project: projectReducer,
    app: appReducer
})