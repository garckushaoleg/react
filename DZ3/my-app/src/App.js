import React from 'react';
import './App.css';
import ButtonForAddingNewNotes from './components/ButtonForAddingNewNotes'
import NoteForm from './components/NoteForm'

class App extends React.Component {
  constructor() {
    super();
    this.key = 'BJG65';

    this.state = {
      data: JSON.parse(localStorage.getItem(this.key)) || []
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.key, JSON.stringify(this.state.data));
  }

  addNewNote = (obj) => {
    this.setState({
      data: [...this.state.data, obj]
    });
  }

  setNote = (obj) => {
    const copyArray = [...this.state.data];

    const index = copyArray.findIndex((el) => {
      return el.id == obj.id
    });

    copyArray.splice(index, 1, obj);

    this.setState({
      data: [...copyArray]
    });
  }

  deleteNote = (id) => {
    const arr = this.state.data.filter((el) => {
      return el.id != id
    });

    this.setState({
      data: [...arr]
    });
  }

  render() {

    return (
      <div style={AppStyle}>
        <ButtonForAddingNewNotes onClick = {this.addNewNote} />
        <div style={NoteFormCntStyle}>
        {
          this.state.data.map((el) => {
            return <NoteForm 
                      obj = {el} 
                      key = {el.id} 
                      onChange = {this.setNote}
                      onDelete = {this.deleteNote}
                    />
          })
          }
        </div>
      </div>
    )
  }
}

const AppStyle = {
  width: '100%'
}

const NoteFormCntStyle = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap'
}

export default App