import React from 'react';

class TBody extends React.Component {
    constructor() {
      super();

      this.contacts = [
        {
          id: 1,
          name: 'Олег',
          surname: 'Гаркуша',
          age: '31',
          tel: '063 966 4427'
        },
        {
          id: 2,
          name: 'Влад',
          surname: 'Каплинский',
          age: '21',
          tel: '063 955 4487'
        },
        {
          id: 3,
          name: 'Стас',
          surname: 'Петренко',
          age: '67',
          tel: '093 678 4427'
        },
        {
          id: 4,
          name: 'Юра',
          surname: 'Зайченко',
          age: '41',
          tel: '095 946 4687'
        },
        {
          id: 5,
          name: 'Антон',
          surname: 'Красовский',
          age: '49',
          tel: '073 000 4581'
        }
      ]
    }

    render() {
      return (  
        <tbody>
          <TBodyView arr = {this.contacts}/>
        </tbody>  
     )  
    }
  }

  class TBodyView extends React.Component {
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
  
  export default TBody;