import React from 'react';
import { fetchTodos, toggleTodoToServer, deleteTodoToServer }  from '../store/todos/actions';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemSecondaryAction,
    Divider
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import store from '../store';

function TodoListItem({ todo }) {

    async function onClickTodo(todo) {
        await toggleTodoToServer(todo);
        store.dispatch(fetchTodos());
    }

    async function onClickDeleteButton(id) {
        await deleteTodoToServer(id);
        store.dispatch(fetchTodos());
    }

    return (
        <>
            <ListItem button onClick={() => onClickTodo(todo)}>
                <ListItemIcon>
                    {todo.isDone ? <CheckIcon /> : <CheckBoxOutlineBlankIcon />}
                </ListItemIcon>
                <ListItemText primary={todo.title} />
                <ListItemSecondaryAction
                    onClick={(e) => {
                        e.preventDefault();
                        onClickDeleteButton(todo.id);
                    }
                }
                >
                    <DeleteIcon />
                </ListItemSecondaryAction>
            </ListItem>
            <Divider />
        </>
    );
}

export default TodoListItem;
