import React from 'react';
import PropTypes from 'prop-types'
import { contactType } from '../propTypes';

class ContactEditingArea extends React.Component {
  constructor() {
    super();
  }

  state = {
    name: '',
    surname: ''
  }

  handlerClickOnSaveButton = () => {

    this.props.onSubmit({
      id: this.state.id,
      name: this.props.contact.name,
      surname: this.props.contact.surname
    });

    this.setState({
      name: '',
      surname: ''
    });
    this.props.onReset();
  }

  handlerClickOnDeleteButton = () => {
    this.props.onDelete();
  }

  handleChange = (e) => {
    this.setState({
      id: this.props.contact.id
    });

    switch (e.target.id) {
      case 'name': this.setState({
        name: e.target.value
      });
      break;
      case 'surname': this.setState({
        surname: e.target.value
      });
      break;
    };
  }

  handleInput = (e) => {
    this.props.onCreate(e.target.id, e.target.value);
  }


  render() {

    return (
    
      <form style={ContactEditingAreaStyle}>
      <label htmlFor="name">Имя</label>
      <input 
         type="text" 
         id="name" 
         value={this.props.contact.name || this.state.name} 
         onInput={this.handleInput} 
         onChange={this.handleChange} 
         style={inputStyle}
      />

      <label htmlFor="surname">Фамилия</label>
      <input 
         type="text" 
         id="surname" 
         value={this.props.contact.surname || this.state.surname} 
         onInput={this.handleInput} 
         onChange={this.handleChange} 
         style={inputStyle}
      />

      <p 
        onClick = {this.handlerClickOnSaveButton} 
        style={button}>
        Save
      </p>
      <p 
        onClick = {this.handlerClickOnDeleteButton} 
        hidden = {this.props.hidden} 
        style={button}>
        Delete
      </p>
      </form>
    
    )
  }
  }

  const button = {
    padding: '10px 20px',
    border: '1px solid black',
    marginTop: '20px',
    cursor: 'pointer'
  }

  const ContactEditingAreaStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: '1px solid red'
  }

  const inputStyle = {
    marginBottom: '20px'
  }

  ContactEditingArea.propTypes = {
    contact: contactType.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    hidden: PropTypes.bool.isRequired,
  }

export default ContactEditingArea;