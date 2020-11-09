import React from "react";
import ProjectItem from './ProjectItem'
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../store/project.action";

function ProjectList() {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects);

    if (!projects.length) {
        return <button onClick={() => dispatch(getProjects())}>Load projects</button>
    }
    return (
        <ul>
            {projects.map((project, index) => {
                console.log(projects)
                console.log(project)
                return <ProjectItem project={project} key={index}/>
            })}
        </ul>
    )
}

export default (ProjectList);