import React, { Component } from 'react';
import FolderItems from '../FolderItems/FolderItems';
import NoteItems from '../NoteItems/NoteItems';

class Folder extends Component {
  render() {
    return (
      <>
        <div className="group">
          <FolderItems folders={this.props.folders}/>
          <NoteItems notes={this.props.notes.filter(note => note.folderId === this.props.routeInfo.match.params.id)}/>
        </div>
      </>
    );
  }
}

export default Folder;