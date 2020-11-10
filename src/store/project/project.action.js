import {CREATE_PROJECT, FETCHED_PROJECT, FETCHED_ALL_PROJECTS} from "./project.types";
import axios from 'axios'
import {hideLoader, showLoader} from "../app/app.action";

const baseUrl = "http://localhost:8090/projects";

export function addProject(project) {
    return {
        type: CREATE_PROJECT,
        payload: project
    }
};

export function getProjects() {
    return async dispatch => {
        dispatch(showLoader());
        const result = await axios.get(baseUrl);
        dispatch({type: FETCHED_ALL_PROJECTS, payload: result.data._embedded.projects});
        dispatch(hideLoader());
    }
}

export function getProjectById(id) {
    return async dispatch => {
        dispatch(showLoader());
        const result = await axios.get(baseUrl + '/' + id);
        dispatch({type: FETCHED_PROJECT, payload: result.data});
        dispatch(hideLoader());
    }
}