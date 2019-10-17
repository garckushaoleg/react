import React from 'react';
import PropTypes from 'prop-types';

class ContactsListItem extends React.Component {
  constructor() {
    super();
  }

  getId = (e) => {
    this.props.onDisplay(e.target.closest('tr').dataset.id);
  }

  render() {
    const {item} = this.props;

    return (
      <tr data-id = {item.id} onClick = {this.getId}>
        <td style={itemStyle}>{item.name}</td>
        <td style={itemStyle}>{item.surname}</td>
      </tr>
      )
}
  }

  const itemStyle = {
    border: '1px solid black',
    cursor: 'pointer'
  }

  ContactsListItem.propTypes = {
  onDisplay: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired
}

export default ContactsListItem;