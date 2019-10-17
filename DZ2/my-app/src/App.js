import React from 'react';
import './App.css';
import ContactsList from './components/ContactsList'
import ContactEditingArea from './components/ContactEditingArea'

class App extends React.Component {

  state = {
    hidden: false,
    contact: {
      name: '',
      surname: ''
    },
    contacts: [
      {
        id: 1,
        name: 'Олег',
        surname: 'Гаркуша'
      },
      {
        id: 2,
        name: 'Влад',
        surname: 'Каплинский'
      },
      {
        id: 3,
        name: 'Стас',
        surname: 'Петренко'
      },
      {
        id: 4,
        name: 'Юра',
        surname: 'Зайченко'
      },
      {
        id: 5,
        name: 'Антон',
        surname: 'Красовский'
      }
    ]
  }

  displayContactDetails = (index) => {
    const item = this.state.contacts.find((el) => el.id == index);
    this.setState({
      contact: item
    })
  }

  checkForId = (item) => {
    if (item.id) {
      this.editContact(item)
    } else {
      this.createContact(item)
    }
  }

  createContact = (item) => {
    item.id = Date.now();
    this.addContact(item);
  }

  getIndex = (obj) => {
    return this.state.contacts.findIndex((el) => el.id == obj.id);
  }

  editContact = (obj) => {
    const copyArray = [...this.state.contacts];
    copyArray.splice(this.getIndex(obj), 1, obj);
    this.setState({
      contacts: copyArray
    })
  }


  addContact = (item) => {
    this.setState({
      contacts: [...this.state.contacts, item]
    });
  }

  deleteContact = () => {
    const copyArray = [...this.state.contacts];
    copyArray.splice(this.getIndex(this.state.contact), 1);
    this.setState({
      contacts: copyArray
    });
    this.resetData();
  }

  switchForm = async () => {
    await this.setState({
      hidden: true
    });
    this.resetData();
  }

  resetData = async () => {
    await this.setState({
      contact: {
        id:'',
        name: '',
        surname: ''
      }
    })
  }

  createEditableContact = (id, value) => {
    const obj = Object.assign({}, this.state.contact);

    if (id == 'name') {
      obj.name = value;
    } else {
      obj.surname = value;
    }

    this.setState({
      contact: obj
    })
  }


  render() {

    return (
      <div style={ContactListStyle}>
        <ContactsList
          contacts={this.state.contacts}
          onDisplay={this.displayContactDetails}
          onSwitch={this.switchForm}
        />
        <ContactEditingArea
          onSubmit={this.checkForId}
          onDelete={this.deleteContact}
          contact={this.state.contact}
          hidden={this.state.hidden}
          onCreate={this.createEditableContact}
          onReset={this.resetData}
        />
      </div>
    )
  }
}

const ContactListStyle = {
  display: 'flex',
  width: '100%',
  maxWidth: '900px',
  border: '1px solid black'
}

export default App;
