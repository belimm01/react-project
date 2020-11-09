import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default () => {
    const classes = useStyles();
    return (
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<EditIcon/>}
            >
                Edit</Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon/>}
            >
                Delete
            </Button>
        </ButtonGroup>
    )
}
