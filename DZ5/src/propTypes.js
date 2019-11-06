import PropTypes from 'prop-types';

export const todosType = PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string
}));