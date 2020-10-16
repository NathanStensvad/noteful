import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from "./Home/Home";
import Folder from "./Folder/Folder";
import Note from "./Note/Note";
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NoteContext from './NoteContext';
import config from './config';

class App extends Component {

  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {

    document.title = "Noteful";

    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
        .then(([notesResults, foldersResults]) => {
          if(!notesResults.ok)
            return notesResults.json().then(e => Promise.reject(e));
          if(!foldersResults.ok)
            return foldersResults.json().then(e => Promise.reject(e));

          return Promise.all([notesResults.json(), foldersResults.json()]);
        })
        .then(([notes,folders]) => {
          this.setState({notes,folders});
          console.log(this.state)
        })
        .catch(error => {
          console.error({error});
        })
  }

  addFolder = folder => {
    this.setState( {
      folders: [...this.state.folders, {id: folder, name: folder}]
    })
  }

  addNote = (name, content, folder) => {
    let findFolderId = this.state.folders.find(folderThing => folderThing.name === folder).id;

    this.setState( {
      notes: [...this.state.notes, {name: name, folderId: findFolderId, content: content, modified: new Date().toISOString(), id: name }]
    })
  }

  deleteNote = deletedNote => {
    let smallerArray = this.state.notes.filter(note => note.id !== deletedNote)
    this.setState( {
      notes: smallerArray
    })
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      addFolder: this.addFolder,
      addNote: this.addNote,
      deleteNote: this.deleteNote
    }

    return (
      <>
      <NoteContext.Provider value={contextValue}>
        <Router>
          <Link to="/"><h1>Noteful</h1></Link>
          <div>
            <Route
              exact path="/"
              component={(match) => <Home
                routeInfo={match}
              />}
            />
            <Route
              path="/folders/:id"
              component={(match) => <Folder
                routeInfo={match}
              />}
            />
            <Route
              path="/notes/:id"
              component={(match) => <Note
                routeInfo={match}
              />}
            />
            <Route
              path="/add-folder"
              component={(match) => <AddFolder
                routeInfo={match}
              />}
            />
            <Route
              path="/add-note"
              component={(match) => <AddNote
                {...this.state}
                routeInfo={match}
              />}
            />
          </div>
        </Router>
      </NoteContext.Provider>
      </>
    );
  }
}

export default App;