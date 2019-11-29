import React from 'react';
import List from '@material-ui/core/List';
import ListItem from './ListItem';

function TodosList({ isFetching, todos, toggleTodo, removeTodo }) {
    return (
        <>
            {isFetching && <div>Loading....</div>}
            <List component="nav" aria-label="main">
                {todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </List>
        </>
    );
}

export default TodosList;
