import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import STORE from "./STORE";
import Home from "./Home/Home";
import Folder from "./Folder/Folder";
import Note from "./Note/Note";
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';

class App extends Component {

  state = {
    notes: [],
    folders: []
  }

  componentDidMount() {
    this.setState(STORE);
  }

  render() {
    return (
      <>
        <Router>
        <Link to="/"><h1>Noteful</h1></Link>
          <div>
            <Route 
            exact path="/"
              component={(match) => <Home
                notes={this.state.notes}
                folders={this.state.folders}
                routeInfo={match}
              />}
            />
            <Route
              path="/folders/:id"
              component={(match) => <Folder
                notes={this.state.notes}
                folders={this.state.folders}
                routeInfo={match}
              />}
            />
            <Route
              path="/notes/:id"
              component={(match) => <Note
                notes={this.state.notes}
                folders={this.state.folders}
                routeInfo={match}
              />}
            />
            <Route
              path="/add-folder"
              component={(match) => <AddFolder
                notes={this.state.notes}
                folders={this.state.folders}
                routeInfo={match}
              />}
            />
            <Route
              path="/add-note"
              component={(match) => <AddNote
                notes={this.state.notes}
                folders={this.state.folders}
                routeInfo={match}
              />}
            />
          </div>
        </Router>
      </>
    );
  }
}

export default App;