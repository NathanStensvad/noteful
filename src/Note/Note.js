import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import NoteContext from '../NoteContext';
import DeleteButton from '../DeleteButton/DeleteButton';

class Note extends Component {
  static contextType = NoteContext;
  
  checkForUndefined() {
    if (this.context.notes.find(note => parseInt(note.id) === parseInt(this.props.routeInfo.match.params.id)) !== undefined) {
      return this.context.notes.find(note => parseInt(note.id) === parseInt(this.props.routeInfo.match.params.id)).content
    }
    else {
      return "";
    }
  }

  render() {
    return (
      <>
        <div className="group">
          <BackButton/>
          <section className="item-double">
            {this.context.notes
              .filter(note =>
                parseInt(note.id) === parseInt(this.props.routeInfo.match.params.id))
              .map(note => (
                <div key={note.id} className="group">
                  <section className="item">
                    <h2>
                      <Link to={`/notes/${note.id}`}>{note.name}</Link>
                    </h2>
                    <p>Date modified on {new Date(note.modified).toLocaleDateString()}</p>
                  </section>
                  <section className="item">
                    <DeleteButton
                    id = {note.id}
                    routeInfo= {this.props.routeInfo}
                    />
                  </section>
                </div>
              ))}
              <p>{this.checkForUndefined()}</p>
          </section>
        </div>
      </>
    );
  }
}

export default Note;