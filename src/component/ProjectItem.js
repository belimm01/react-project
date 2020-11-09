import React from "react";
import PropTypes from 'prop-types'

function ProjectItem({project}) {
    return (
        <div>
            {project.name}
        </div>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem