import React from 'react';

class ContactsListItem extends React.Component {
    constructor(props) {
      super();

      this.arr = props.arr
    }

    render() {
      return (
        this.arr.map((el) => {
          return <tr key={el.id}>
                   <td>{el.name}</td>
                   <td>{el.surname}</td>
                   <td>{el.age}</td>
                   <td>{el.tel}</td>
                 </tr>
        })
      )
    }
  }

  export default ContactsListItem;