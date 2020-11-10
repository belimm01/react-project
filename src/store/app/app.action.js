import {HIDE_LOADER, SHOW_LOADER} from "../project/project.types";

export function showLoader() {
    return dispatch => {
        dispatch({type: SHOW_LOADER});
    }
}

export function hideLoader() {
    return dispatch => {
        dispatch({type: HIDE_LOADER});
    }
}