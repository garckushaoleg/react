import {
    TODOS_REMOVE_TODO,
    TODOS_TOGGLE_TODO,
    TODOS_SET_TODOS,
    TODO_SET_FETCHING
} from './actions';
const initialState = {
    isFetching: false,
    items: []
};

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case TODOS_REMOVE_TODO:
            return {
                ...state,
                items: state.items.filter(todo => todo.id !== payload)
            };
        case TODOS_TOGGLE_TODO:
            return {
                ...state,
                items: state.items.map(todo =>
                    todo.id !== payload
                        ? todo
                        : { ...todo, isDone: !todo.isDone }
                )
            };

        case TODOS_SET_TODOS:
            return {
                ...state,
                items: payload
            };

        case TODO_SET_FETCHING:
            return {
                ...state,
                isFetching: payload
            };
        default:
            return state;
    }
}
