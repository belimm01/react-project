import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            alignItems: "center",
            justifyContent: "center",
            display: 'flex',

        },
    },
}));

export default function ProjectPagination(props) {
    const classes = useStyles();
    const [{projects, currentPage, projectsPerPage}, setState] = useState(
        {
            projects: props.projects,
            currentPage: 1,
            projectsPerPage: 5,
        }
    );

    const handleClick = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    return (
        <div>

        </div>
    );
}