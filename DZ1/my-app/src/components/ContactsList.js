import React from 'react';
import state from './State'
import TableHeader from './TableHeader'
import ContactsListItem from './ContactsListItem'

class ContactsList extends React.Component {
    constructor() {
      super();

      this.contacts = state.contacts;
    }

    render() {
      return (
      <table>
        <TableHeader />
        <tbody>
          <ContactsListItem arr = {this.contacts}/>
        </tbody>
      </table>  
     )  
    }
  }
  
  export default ContactsList;