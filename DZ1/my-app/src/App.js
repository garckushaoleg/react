import React from 'react';
import './App.css';
import ContactsList from './components/ContactsList'

class App extends React.Component {

  state = {
    firstContact: {
      id: 1,
      name: 'Олег',
      surname: 'Гаркуша',
      age: '31',
      tel: '063 966 4427'
    },
    secondContact: {
      id: 2,
      name: 'Влад',
      surname: 'Каплинский',
      age: '21',
      tel: '063 955 4487'
    },
    thirdContact: {
      id: 3,
      name: 'Стас',
      surname: 'Петренко',
      age: '67',
      tel: '093 678 4427'
    },
    fourthContact: {
      id: 4,
      name: 'Юра',
      surname: 'Зайченко',
      age: '41',
      tel: '095 946 4687'
    },
    fifthContact: {
      id: 5,
      name: 'Антон',
      surname: 'Красовский',
      age: '49',
      tel: '073 000 4581'
    }
  }



  render() {
    return (  
      <ContactsList contacts = {Object.values(this.state)}/>     
   )  
  }
}



export default App;
