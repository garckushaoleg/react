import { connect } from 'react-redux';
import List from './List';
import { removeTodo, toggleTodo } from '../store/todos/actions';
import { FILTER_ALL, FILTER_DONE, FILTER_NOT_DONE } from '../filters';

function filter(todos, currentFilter) {
    switch (currentFilter) {
        case FILTER_DONE:
            return todos.filter(todo => todo.isDone);
        case FILTER_NOT_DONE:
            return todos.filter(todo => !todo.isDone);
        case FILTER_ALL:
        default:
            return todos;
    }
}

function mapStateToProps(state) {
    return {
        todos: filter(state.todos.items, state.filter),
        isFetching: state.todos.isFetching
    };
}

const mapDispatchToProps = {
    removeTodo,
    toggleTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
