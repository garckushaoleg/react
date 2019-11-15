import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

export default function Comment({ comment }) {
    const classes = useStyles();


    return (
        <Paper className={classes.root}>
            <Typography variant="h3" component="h3">{comment.name}</Typography>
            <Typography component="h2">{comment.email}</Typography>
            <Typography variant="h5" component="h3">{comment.body}</Typography>
        </Paper>
    )
}