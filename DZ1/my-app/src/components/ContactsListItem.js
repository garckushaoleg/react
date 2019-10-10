import React from 'react';

class ContactsListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const {item} = this.props;

    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.surname}</td>
        <td>{item.age}</td>
        <td>{item.tel}</td>
      </tr>
      )
}
  }

export default ContactsListItem;