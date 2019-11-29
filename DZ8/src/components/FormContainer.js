import { connect } from 'react-redux';
import Form from './Form';
import { addTodo } from '../store/todos/actions';

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    addTodo
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
