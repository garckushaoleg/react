import React, { useState } from 'react';
import './App.css';
import ButtonForAddingNewNotes from './components/ButtonForAddingNewNotes';
import FormToAdd from './components/FormToAdd';
import ToDos from './components/ToDos';
import {ColorContext} from './context.js';

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [arr, setArr] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('');

  function switchState() {
    setToggle(!toggle);
  }

  function AddToDo(obj) {
    const { title, color } = obj;
    setArr([...arr, {
      id: Date.now(),
      isDone: false,
      title: title,
      style: {
        backgroundColor: color,
        ...toDoStyle
      }
    }]);

    switchState();
  }

  return (
    <div style={appStyle}>
      <ButtonForAddingNewNotes onClick={switchState} />
      {
        toggle 
        ? 
        <FormToAdd onClickOnSaveButton={AddToDo} onClickOnCancelButton = {switchState}/> 
        : 
        null
      }
      <p>Выберите тему оформления: 
        <span style={whiteThemeStyle} onClick = {() => setBackgroundColor('white')}></span>
        <span style={darkThemeStyle} onClick = {() => setBackgroundColor('grey')}></span>
      </p>
      <ColorContext.Provider value={backgroundColor}>
      <ToDos arr = {arr} setArr = {setArr} />
      </ColorContext.Provider>
    </div>
  )
}

const appStyle = {
  width: '100%'
}

const toDoStyle = {
  lineHeight: '2',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  fontSize: '16px',
  maxWidth: '300px',
  width: '100%'
}

const whiteThemeStyle = {
  display: 'inline-block',
  width: '48px',
  height: '18px',
  border: '1px solid black',
  margin: '0 10px',
  cursor: 'pointer'
}

const darkThemeStyle = {
  display: 'inline-block',
  width: '50px',
  height: '20px',
  backgroundColor: 'grey',
  cursor: 'pointer'
}