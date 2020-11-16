import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteProjectById} from "../../store/project/project.action";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            display: 'inline-block'
        },
    },
}));

export default function AppButtonGroup({project}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const deleteProject = () => {
        dispatch(deleteProjectById(project.id))
    }

    return (
        <div className={classes.root}>
            <Link to={`/project/${project.id}`}>
                <Fab size="small" color="primary" aria-label="edit">
                    <EditIcon/>
                </Fab>
            </Link>
            <Fab size="small" color="secondary" aria-label="edit"
                 onClick={deleteProject}>
                <DeleteIcon/>
            </Fab>
        </div>
    )
}
