import React from "react";
import PropTypes from 'prop-types'
import TableRow from "@material-ui/core/TableRow";
import withStyles from "@material-ui/core/styles/withStyles";
import StyledTableCell from "./StyledTableCell";
import ButtonGroup from "./AppButtonGroup";

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
            <StyledTableCell component="th" scope="row">
                {project.name}
            </StyledTableCell>
            <StyledTableCell align="right">{project.sourceLanguage}</StyledTableCell>
            <StyledTableCell align="right">{project.status}</StyledTableCell>
            <StyledTableCell align="right">{project.dateCreated}</StyledTableCell>
            <StyledTableCell align="right">{project.dateDue}</StyledTableCell>
            <StyledTableCell align="right"> <ButtonGroup/></StyledTableCell>
        </StyledTableRow>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired
}

export default ProjectItem