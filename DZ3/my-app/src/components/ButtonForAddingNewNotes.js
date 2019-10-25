import React from 'react';
import PropTypes from 'prop-types';

class ButtonForAddingNewNotes extends React.Component {

    onClickOnAddButton = () => {
      this.props.onClick();
    }

  render() {

    return (
    <button onClick = {this.onClickOnAddButton}>Add</button>
    )
  }
}

ButtonForAddingNewNotes.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ButtonForAddingNewNotes;