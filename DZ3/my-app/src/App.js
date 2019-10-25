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

  setItemToLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.state.data));
  }

  addNewNote = async () => {
    const id = Date.now();
    const newNote = {
      id: id,
      title: '',
      description: ''
    };

    await this.setState({
      data: [...this.state.data, newNote]
    });

    this.setItemToLocalStorage();
  }

  setNote = (obj) => {
    const copyArray = [...this.state.data];

    copyArray.forEach((el) => {
      if (el.id == obj.id) {
        for (const key in obj) {
          el[key] = obj[key]
        }
      }
    });

    this.setState({
      data: copyArray
    });

    this.setItemToLocalStorage();
  }

  deleteNote = async (id) => {
    const arr = this.state.data.filter((el) => {
      return el.id != id
    });

    await this.setState({
      data: arr
    });

    this.setItemToLocalStorage();
  }

  render() {

    return (
      <div style={appStyle}>
        <ButtonForAddingNewNotes onClick = {this.addNewNote} />
        <div style={noteFormCntStyle}>
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

const appStyle = {
  width: '100%'
}

const noteFormCntStyle = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap'
}

export default App