import React, { Component } from 'react';
import FolderItems from '../FolderItems/FolderItems';
import NoteItems from '../NoteItems/NoteItems';
import NoteContext from '../NoteContext';

class Folder extends Component {
  static contextType = NoteContext;

  render() {
    return (
      <>
        <div className="group">
          <FolderItems
          routeInfo = {this.props.routeInfo}/> 
          <NoteItems 
          notes={this.context.notes.filter(note => note.folderId === this.props.routeInfo.match.params.id)}
          routeInfo = {this.props.routeInfo}/>
        </div>
      </>
    );
  }
}

export default Folder;