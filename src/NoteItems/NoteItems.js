import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteItems extends Component {
  render() {
    return (
      <section className="item-double">
        {this.props.notes.map(note => (
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
        <Link to={'/add-note'}><h3>Add note</h3></Link>
      </section>
    );
  }
}

export default NoteItems;