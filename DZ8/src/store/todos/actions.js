import api from '../../api';
import axios from 'axios';
import config from './config';

export const TODOS_REMOVE_TODO = 'TODOS_REMOVE_TODO';
export const removeTodo = payload => ({
    type: TODOS_REMOVE_TODO,
    payload
});

export const TODOS_TOGGLE_TODO = 'TODOS_TOGGLE_TODO';
export const toggleTodo = payload => ({
    type: TODOS_TOGGLE_TODO,
    payload
});

export const TODOS_ADD_TODO = 'TODOS_ADD_TODO';
export const addTodo = payload => ({
    type: 'TODOS_ADD_TODO',
    payload
});

export const TODOS_SET_TODOS = 'TODOS_SET_TODOS';
export const setTodos = payload => ({
    type: TODOS_SET_TODOS,
    payload
});

export const TODO_SET_FETCHING = 'TODO_SET_FETCHING';
const setFetching = payload => ({
    type: TODO_SET_FETCHING,
    payload
});

export const fetchTodos = () => {
    return dispatch => {
        dispatch(setFetching(true));
        api.get().then(resp => {
            dispatch(setTodos(resp.data));
            dispatch(setFetching(false));
        });
    };
};

export const addTodoToServer = (newToDo) => {
    axios.post(config.postsUrl, newToDo);
}

export const toggleTodoToServer = (todo) => {
    axios.put(`${config.postsUrl}/${todo.id}`, {
        ...todo,
        isDone: !todo.isDone
    })
}

export const deleteTodoToServer = (id) => {
    axios.delete(`${config.postsUrl}/${id}`)
}
