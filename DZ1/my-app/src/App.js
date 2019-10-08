import React from 'react';
import './App.css';
import THead from './components/thead'
import TBody from './components/tbody'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (  
      <table>
        <THead />
        <TBody />
      </table>     
   )  
  }
}



export default App;
