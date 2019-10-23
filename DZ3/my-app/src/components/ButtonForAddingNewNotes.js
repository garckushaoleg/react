import React from 'react';
import PropTypes from 'prop-types';

class ButtonForAddingNewNotes extends React.Component {

    onClickOnAddButton = () => {
      const id = Date.now();
        this.props.onClick({
          id: id,
          title: '',
          description: ''
        });
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