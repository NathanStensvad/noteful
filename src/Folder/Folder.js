import React, { Component } from 'react';
import NoteError from '../NoteError';
import FolderError from '../FolderError';
import FolderItems from '../FolderItems/FolderItems';
import NoteItems from '../NoteItems/NoteItems';
import NoteContext from '../NoteContext';

class Folder extends Component {
  static contextType = NoteContext;

  render() {
    return (
      <>
        <div className="group">
          <FolderError>
            <FolderItems
              routeInfo={this.props.routeInfo} />
          </FolderError>
          <NoteError>
            <NoteItems
              notes={this.context.notes.filter(note => parseInt(note.folderId) === parseInt(this.props.routeInfo.match.params.id))}
              routeInfo={this.props.routeInfo} />
          </NoteError>
        </div>
      </>
    );
  }
}

export default Folder;