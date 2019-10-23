import PropTypes from 'prop-types';

export const noteType = PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
});