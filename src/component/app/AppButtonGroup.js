import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";

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
    return (
        <div className={classes.root}>
            <Link to={`/project/${project.id}`}>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<EditIcon/>}>
                    Edit
                </Button>
            </Link>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon/>}>
                Delete
            </Button>
        </div>
    )
}
