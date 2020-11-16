import React, {useEffect, useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProjectById, saveProject, updateProject} from "../../store/project/project.action";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import SaveIcon from '@material-ui/icons/Save';
import {Backspace} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import {FETCHED_PROJECT} from "../../store/project/project.types";
import _ from 'lodash'
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    center: {
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
    },
}));

function ProjectItemForm() {
    const initialState = {
        id: '',
        name: '',
        sourceLanguage: '',
        status: '',
        targetLanguages: '',
        dateDue: ''
    };
    const [project, setProject] = useState(initialState);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();

    let fetchedProject = useSelector(state => state.project.currentProject);
    let {projectId} = useParams();

    useEffect(() => {
        if (projectId) {
            dispatch(getProjectById(projectId))
        }
    }, [dispatch, projectId])

    useEffect(() => {
        if (fetchedProject && !_.isEmpty(fetchedProject)) {
            const formattedDate = fetchedProject.dateDue.slice(0, 16);
            Object.assign(fetchedProject, {dateDue: formattedDate})
            setProject(fetchedProject)
        }
    }, [fetchedProject])

    const handleInputChange = e => {
        const {name, value} = e.target
        setProject({...project, [name]: value})
    }

    const resetState = () => {
        dispatch({type: FETCHED_PROJECT, payload: {...project, ...initialState}});
    };

    const addProject = () => {
        const {name, sourceLanguage, targetLanguages, dateDue} = project
        if (!name || !sourceLanguage || !targetLanguages || !dateDue) return

        //set dateDue in correct format
        Object.assign(project, {dateDue: new Date(project.dateDue).toISOString()});

        //set targetLanguages in correct format
        if (_.isString(project.targetLanguages)) Object.assign(project, {targetLanguages: project.targetLanguages.split()});

        project.id ? dispatch(updateProject(project)) : dispatch(saveProject(project));

        resetState();
        history.push("/");
    }

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
                                    required={true}
                                    label="Name"
                                    name='name'
                                    onChange={handleInputChange}
                                    id="input-project-name"
                                    className={classes.textField}
                                    value={project.name}/>
                                <TextField
                                    required={true}
                                    label="Source Language"
                                    name='sourceLanguage'
                                    onChange={handleInputChange}
                                    id="input-project-source-language"
                                    className={classes.textField}
                                    value={project.sourceLanguage}/>
                            </div>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="Status">Status</InputLabel>
                                    <Select
                                        required={true}
                                        labelId="Status"
                                        name='status'
                                        label="Status"
                                        id="input-project-status"
                                        value={project.status}
                                        onChange={handleInputChange}>
                                        <MenuItem value={"NEW"}>NEW</MenuItem>
                                        <MenuItem value={"COMPLETED"}>COMPLETED</MenuItem>
                                        <MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    required={true}
                                    label="Target Languages"
                                    name='targetLanguages'
                                    onChange={handleInputChange}
                                    id="input-project-target-language"
                                    className={classes.textField}
                                    value={project.targetLanguages}
                                    helperText="Example: pl, ru, de"/>
                            </div>
                            <div>
                                <TextField
                                    required={true}
                                    id="input-project-date-due"
                                    label="Date due"
                                    name='dateDue'
                                    onChange={handleInputChange}
                                    type="datetime-local"
                                    className={classes.textField}
                                    value={project.dateDue}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}/>
                            </div>
                        </form>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/`}>
                        <Button
                            variant="contained"
                            size="small"
                            onClick={resetState}
                            className={classes.button}
                            startIcon={<Backspace/>}>
                            Back
                        </Button>
                    </Link>
                    <Button
                        onClick={addProject}
                        variant="contained"
                        color="primary"
                        size="small"
                        type="submit"
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