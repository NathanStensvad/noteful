import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NoteContext from '../NoteContext';
import DeleteButton from '../DeleteButton/DeleteButton';

class NoteItems extends Component {

  static contextType = NoteContext;

  render() {
    return (
      <section className="item-double folder_background">
        {/*I have to use props here because Folder.js does some filtering*/}
        {this.props.notes.map(note => (
          <div key={note.id} className="group Note">
            <section className="item">
              <h2>
                <Link to={`/notes/${note.id}`}>{note.name}</Link>
              </h2>
              <p>Date modified on {new Date(note.modified).toLocaleDateString()}</p>
            </section>
            <section className="item">
              <DeleteButton
              id = {note.id}
              routeInfo = {this.props.routeInfo}/>
            </section>
          </div>
        ))}
        <Link to={'/add-note'}><h3>Add note</h3></Link>
      </section>
    );
  }
}

NoteItems.propTypes = {
  notes: PropTypes.array
}

export default NoteItems;