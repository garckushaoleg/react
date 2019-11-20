import { connect } from 'react-redux';
import List from './List';
import { removeTodo, toggleTodo } from '../store/todos/actions';

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    removeTodo,
    toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(List);