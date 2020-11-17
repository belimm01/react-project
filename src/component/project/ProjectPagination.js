import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from "@material-ui/lab/Pagination";

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

export default function ProjectPagination({projectsPerPage, totalProjects, currentPage, page}) {
    const pageNumbers = Math.round(totalProjects / projectsPerPage);
    const classes = useStyles();

    const handlePageChange = (event, value) => {
        page(value);
    }

    return (
        <div className={classes.root}>
            <Pagination count={pageNumbers}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"/>
        </div>
    );
}