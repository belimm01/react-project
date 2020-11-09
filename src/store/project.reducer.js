import {FETCHED_PROJECT} from "./project.types";

let initialState = {
    projects: []
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHED_PROJECT:
            return {...state, projects: action.payload}
        default:
            return state
    }
}
