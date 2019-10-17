import PropTypes from 'prop-types';

export const contactsType = PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
}));

export const contactType = PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
});