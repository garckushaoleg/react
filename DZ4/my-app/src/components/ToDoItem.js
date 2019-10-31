import React from 'react';

export default function ToDoItem(props) {
    return (
        <li
           style={props.el.style}
           data-id={props.el.id}
           onClick={props.onClick}
        >
            {props.el.isDone ? <img src="./images/success.svg" width="20" /> : null}
            <span style={titleStyle}>{props.el.title}</span>
            <button
               data-id="delete"
               onClick={props.onClick}
            >
              Delete
            </button>
        </li>
    )
}

const titleStyle = {
    padding: '0 15px'
}