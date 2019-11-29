import { FILTER_ALL } from '../../filters';
import { FILTER_CHANGE_FILTER } from './actions';
const initialState = FILTER_ALL;

export default function(state = initialState, { type, payload }) {
    switch (type) {
        case FILTER_CHANGE_FILTER:
            return payload;
    }
    return state;
}
