import React from 'react';
import ContactsListItem from './ContactsListItem'
import { contactsType } from '../propTypes';
import PropTypes from 'prop-types';

class ContactsList extends React.Component {
  constructor() {
    super();
  }

  handlerClickOnAddButton = () => {
    this.props.onSwitch();
  }

  render() {
    const { contacts } = this.props;

    return (
      <div style={contactListStyleCnt}>
        <table style={contactListStyle}>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((el) => {
              return <ContactsListItem
                id={el.id}
                key={el.id}
                item={el}
                onDisplay={this.props.onDisplay} />
            })}
          </tbody>
        </table>
        <p onClick={this.handlerClickOnAddButton} style={addButton}>Add</p>
      </div>
    )
  }
}

const addButton = {
  padding: '10px 20px',
  border: '1px solid black',
  marginTop: '20px',
  cursor: 'pointer'
}

const contactListStyle = {
  width: '500px',
  borderCollapse: 'collapse'
}

const contactListStyleCnt = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

ContactsList.propTypes = {
  contacts: contactsType.isRequired,
  onDisplay: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired
}

export default ContactsList;