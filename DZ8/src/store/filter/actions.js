export const FILTER_CHANGE_FILTER = 'FILTER_CHANGE_FILTER';
export const changeFilter = filterName => ({
    type: FILTER_CHANGE_FILTER,
    payload: filterName
});
