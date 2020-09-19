import React, { Component } from 'react';
import BackButton from '../BackButton/BackButton';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import NoteContext from '../NoteContext';

class AddNote extends Component {
  static contextType = NoteContext;

  render() {
    return (
      <>
        <div className="group">
          <BackButton/>
          <AddNoteForm 
          folders={this.context.folders}
          routeInfo={this.props.routeInfo}/>
        </div>
      </>
    );
  }
}

export default AddNote;