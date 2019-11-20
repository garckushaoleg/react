import {combineReducers} from 'redux';
import filter from './filter/reducer'
import todos from './todos/reducer'

export default combineReducers({
    filter,
    todos
}
)