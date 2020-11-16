import React from "react";
import PropTypes from 'prop-types'
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import StyledTableCell from "./StyledTableCell";
import ButtonGroup from "../app/AppButtonGroup";

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function ProjectItem({project}) {
    return (
        <StyledTableRow key={project.id}>
            {Object.values(project).map((value, index) => {
                return <StyledTableCell key={index}>{value}</StyledTableCell>
            })}
            <StyledTableCell align="right">
                <ButtonGroup project={project} key={project.id}/>
            </StyledTableCell>
        </StyledTableRow>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem