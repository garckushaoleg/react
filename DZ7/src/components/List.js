import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

function List({ todos, removeTodo, toggleTodo }) {
    const classes = useStyles();

    return (
        <div>
            {todos.map(todo => (
                <div
                    key={todo.id}
                    onClick={toggleTodo.bind(null, todo.id)}
                    style={todoItemStyle}
                >
                    <Paper className={classes.root}>
                        <Typography variant="h3" component="h3">
                            {todo.title}
                            <IconButton 
                              aria-label="delete" 
                              className={classes.margin} 
                              onClick={removeTodo.bind(null, todo.id)} 
                            >
                                <DeleteIcon fontSize="large"/>
                            </IconButton>
                        </Typography>
                    </Paper>
                </div>
            ))}
        </div>
    )
}

const todoItemStyle={
    cursor: 'pointer'
}

export default List
