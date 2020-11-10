import {FETCHED_PROJECT, FETCHED_ALL_PROJECTS} from "./project.types";

let initialState = {
    projects: [],
    currentProject: []
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_ALL_PROJECTS:
            return {...state, projects: action.payload}
        case FETCHED_PROJECT:
            return {...state, currentProject: action.payload}
        default:
            return state
    }
}
