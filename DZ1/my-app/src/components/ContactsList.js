import React from 'react';
import TableHeader from './TableHeader'
import ContactsListItem from './ContactsListItem'

class ContactsList extends React.Component {
    constructor() {
      super();
    }

    render() {
      const {contacts} = this.props;

      return (
      <table>
        <TableHeader />
        <tbody>
          {contacts.map((el) => {
          return <ContactsListItem key = {el.id} item = {el}/>
        })}
        </tbody>
      </table>  
     )  
    }
  }
  
  export default ContactsList;