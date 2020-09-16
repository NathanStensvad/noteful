import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

class Note extends Component {
  checkForUndefined() {
    if (this.props.notes.find(note => note.id === this.props.routeInfo.match.params.id) !== undefined) {
      return this.props.notes.find(note => note.id === this.props.routeInfo.match.params.id).content
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
            {this.props.notes
              .filter(note =>
                note.id === this.props.routeInfo.match.params.id)
              .map(note => (
                <div key={note.id} className="group">
                  <section className="item">
                    <h2>
                      <Link to={`/notes/${note.id}`}>{note.name}</Link>
                    </h2>
                    <p>Date modified on {new Date(note.modified).toLocaleDateString()}</p>
                  </section>
                  <section className="item">
                    <p>Delete Item</p>
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