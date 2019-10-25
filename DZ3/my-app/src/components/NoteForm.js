import React from 'react';
import PropTypes from 'prop-types'
import { noteType } from '../propTypes';

class NoteForm extends React.Component {

  state = {

  }

  handleInput = async (e) => {
    await this.setState({
      id: this.props.obj.id,
      [e.target.name]: e.target.value
    });

    this.props.onChange(this.state);
  }

  onClickOnCloseButton = () => {
    this.props.onDelete(this.props.obj.id);
  }

  render() {

    return (
    <form style={noteFormStyle} data-id = {this.props.obj.id}>
        <input 
          type="text" 
          name="title" 
          defaultValue = {this.props.obj.title} 
          style = {noteFormTitleStyle} 
          onInput = {this.handleInput}
        />
        <textarea 
          defaultValue = {this.props.obj.description} 
          name="description"
          cols = "30" 
          rows = "10" 
          style = {noteFormDescriptionStyle} 
          onInput = {this.handleInput}
        ></textarea>

        <img src="./images/close.png" 
          style={closeButtonStyle} 
          onClick = {this.onClickOnCloseButton} 
        />
    </form>
    )
  }
}

const noteFormStyle = {
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

const noteFormTitleStyle = {
  border: '1px solid red'
}

const noteFormDescriptionStyle = {
  border: '1px solid red'
}

const closeButtonStyle = {
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