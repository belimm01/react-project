import React, {useEffect} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProjectById} from "../../store/project/project.action";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import SaveIcon from '@material-ui/icons/Save';
import {Backspace} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

function ProjectItemForm() {
    const dispatch = useDispatch();
    const project = useSelector(state => state.project.currentProject);
    const classes = useStyles();
    const {projectId} = useParams();

    useEffect(() => {
        dispatch(getProjectById(projectId))
    }, [dispatch])

    return (
        <div className={`${classes.container}  ${classes.center}`}>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Project name: {project.name}
                        </Typography>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField
                                    label="Name"
                                    id="input-project-name"
                                    defaultValue=""
                                    className={classes.textField}
                                />
                                <TextField
                                    label="Source Language"
                                    id="input-project-source-language"
                                    defaultValue=""
                                    className={classes.textField}
                                    margin="dense"
                                />
                            </div>
                            <div>
                                <TextField
                                    label="Status"
                                    id="input-project-status"
                                    defaultValue=""
                                    className={classes.textField}
                                />
                                <TextField
                                    label="Target Languages"
                                    id="input-project-target-language"
                                    defaultValue=""
                                    className={classes.textField}
                                    helperText="Example: pl, ru, de"
                                    margin="dense"
                                />
                            </div>
                            <div>
                                <TextField
                                    id="input-project-date-due"
                                    label="Date due"
                                    type="datetime-local"
                                    defaultValue=""
                                    className={classes.container}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </form>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/`}>
                        <Button
                            variant="contained"
                            size="small"
                            className={classes.button}
                            startIcon={<Backspace/>}>
                            Back
                        </Button>
                    </Link>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon/>}>
                        Save
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectItemForm