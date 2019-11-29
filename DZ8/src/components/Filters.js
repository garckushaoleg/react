import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from '../filters';
import FilterButton from './FilterButton';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
}));
function Filters({ filter, changeFilter }) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <FilterButton
                changeFilter={changeFilter}
                currentFilter={filter}
                filterName={FILTER_ALL}
            >
                All
            </FilterButton>

            <FilterButton
                changeFilter={changeFilter}
                currentFilter={filter}
                filterName={FILTER_DONE}
            >
                Done
            </FilterButton>

            <FilterButton
                changeFilter={changeFilter}
                currentFilter={filter}
                filterName={FILTER_NOT_DONE}
            >
                TODO
            </FilterButton>
        </Paper>
    );
}

export default Filters;
