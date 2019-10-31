import React, {useContext} from 'react';
import ToDoItem from './ToDoItem';
import {ColorContext} from '../context.js';

export default function ToDos(props) {

  function handleClick(e) {
    const id = e.target.closest('li').dataset.id;
    if (e.target.dataset.id == 'delete') {
      deleteToDoItem(id);
    } else {
      toggle(id);
    }
  }

  function toggle(id) {
    const copyArr = [...props.arr];
      copyArr.forEach((el) => {
        if (el.id == id) {
          el.isDone = !el.isDone
        }
      });
      props.setArr(copyArr)
  }

  function deleteToDoItem(id) {
    const newArr = props.arr.filter((el) => {
      return el.id != id
    });
    props.setArr(newArr)
  }

  return (
    <ul type="none" style={{
      ...toDoStyle,
      backgroundColor: useContext(ColorContext)
    }}>
    {props.arr.map((el) => {
      return <ToDoItem 
                key={el.id}
                el = {el} 
                onClick = {handleClick}
              />
    })}
    </ul>
)
}

const toDoStyle = {
    maxWidth: '350px',
    width: '100%',
    border: '1px solid black'
}