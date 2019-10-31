import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonForAddingNewNotes(props) {

    function onClickOnAddButton() {
      props.onClick();
    }

    return (
    <button onClick = {onClickOnAddButton}>Add</button>
    )
}

ButtonForAddingNewNotes.propTypes = {
  onClick: PropTypes.func.isRequired
}