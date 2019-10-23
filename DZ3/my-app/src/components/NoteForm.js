import React from 'react';
import PropTypes from 'prop-types'
import { noteType } from '../propTypes';

class NoteForm extends React.Component {

  state = {
    title: '',
    description: ''
  }

  getId = (e) => {
    return e.target.closest('form').dataset.id
  }

  handleInput = async (e) => {
    const id = this.getId(e);

    switch (e.target.name) {
      case 'title': await this.setState({
        id: id,
        title: e.target.value
      });
      break;
      case 'description': await this.setState({
        id: id,
        description: e.target.value
      });
      break;
    };

    this.props.onChange(this.state);
  }

  onClickOnCloseButton = (e) => {
    const id = this.getId(e);
    this.props.onDelete(id);
  }

  render() {

    return (
    <form style={NoteFormStyle} data-id = {this.props.obj.id}>
        <input 
          type="text" 
          name="title" 
          defaultValue = {this.props.obj.title} 
          style = {NoteFormTitleStyle} 
          onInput = {this.handleInput}
        />
        <textarea 
          defaultValue = {this.props.obj.description} 
          name="description"
          cols = "30" 
          rows = "10" 
          style = {NoteFormDescriptionStyle} 
          onInput = {this.handleInput}
        ></textarea>

        <img src="./images/close.png" 
          style={CloseButtonStyle} 
          onClick = {this.onClickOnCloseButton} 
        />
    </form>
    )
  }
}

const NoteFormStyle = {
    border: "1px solid black",
    width: '100%',
    maxWidth: '300px',
    height: '350px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative'
}

const NoteFormTitleStyle = {
  border: '1px solid red'
}

const NoteFormDescriptionStyle = {
  border: '1px solid red'
}

const CloseButtonStyle = {
  position: 'absolute',
  width: '40px',
  height: '40px',
  top: '0',
  right: '0',
  cursor: 'pointer'
}

NoteForm.propTypes = {
  obj: noteType.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NoteForm;