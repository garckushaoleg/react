import { TODOS_REMOVE_TODO, TODOS_TOGGLE_TODO, TODOS_ADD_TODO } from './actions'
const initialState = [
    {
        id: 1,
        title: 'Task 1',
        isDone: false
    },
    {
        id: 2,
        title: 'Task 2',
        isDone: false
    },
    {
        id: 3,
        title: 'Task 3',
        isDone: true
    },
    {
        id: 4,
        title: 'Task 4',
        isDone: false
    }
];


export default function (state = initialState, { type, payload }) {
    switch (type) {
        case TODOS_REMOVE_TODO:
            return state.filter(todo => todo.id != payload)
        case TODOS_TOGGLE_TODO:
            const copyState = [...state];
            copyState.forEach((todo) => {
                if (todo.id == payload) {
                    console.log('before=', todo.isDone);
                    todo.isDone = !todo.isDone;
                    console.log('after=', todo.isDone);
                }
            });
            return copyState
        case TODOS_ADD_TODO:
            return [...state, { id: Date.now(), title: payload, isDone: false }]
    }
    return state
}