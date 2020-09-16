import React, { Component } from 'react';
import BackButton from '../BackButton/BackButton';
import AddNoteForm from '../AddNoteForm/AddNoteForm';

class AddNote extends Component {
  render() {
    return (
      <>
        <div className="group">
          <BackButton/>
          <AddNoteForm folders={this.props.folders}/>
        </div>
      </>
    );
  }
}

export default AddNote;