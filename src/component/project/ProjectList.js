import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjects} from "../../store/project/project.action";
import Loader from "../app/AppLoader";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import ProjectItem from "./ProjectItem";
import Paper from "@material-ui/core/Paper";
import StyledTableCell from "./StyledTableCell";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    table: {
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto"
    },
}));

function ProjectList() {
    const dispatch = useDispatch();
    const projects = useSelector(state => state.project.projects);
    const isLoader = useSelector(state => state.app.isLoader);
    const classes = useStyles();

    useEffect(() => {
        dispatch(getProjects())
    }, [dispatch])

    if (isLoader) {
        return <Loader/>
    }

    if (!projects.length) {
        return <p>No data was found!!!</p>
    }

    return (
        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="right">Source&nbsp;Language</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                        <StyledTableCell align="right">Date due</StyledTableCell>
                        <StyledTableCell align="right">Date created</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map(project => {
                        return (
                            <ProjectItem project={project} key={project.id}/>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default (ProjectList);