import React, { useState } from 'react';

export default function FormToAdd(props) {

  const [obj, setObj] = useState({});

  function ocClickOnSaveButton() {
    props.onClickOnSaveButton(obj);
  }

  function onClickOnCancelButton() {
    props.onClickOnCancelButton();
  }

  function handleInput(e) {
    setObj({ ...obj,
      [e.target.name]: e.target.value
    })
  }
 
    return (
    <form style={formToAddStyle}>
        <input 
          type="text" 
          name="title" 
          style = {formToAddTitleStyle} 
          onInput = {handleInput}
        />

       <input 
         type="color" 
         name="color" 
         defaultValue="#ffffff" 
         onInput = {handleInput} 
       />

        <div style={buttonStyle} onClick={ocClickOnSaveButton}>Save</div>
        <div style={buttonStyle} onClick={onClickOnCancelButton}>Cancel</div>
    </form>
    )
}

const buttonStyle = {
  padding: '10px 15px',
  border: "1px solid black",
  cursor: 'pointer'
}

const formToAddStyle = {
  border: "1px solid black",
  width: '100%',
  maxWidth: '200px',
  height: '250px',
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  position: 'relative'
}

const formToAddTitleStyle = {
  border: '1px solid red'
}
