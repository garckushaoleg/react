import React from 'react';
import './App.css';
import ContactsList from './components/ContactsList'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (  
      <ContactsList />     
   )  
  }
}



export default App;
