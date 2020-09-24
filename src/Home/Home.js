import React, { Component } from 'react';
import NoteError from '../NoteError';
import FolderError from '../FolderError';
import FolderItems from '../FolderItems/FolderItems';
import NoteItems from '../NoteItems/NoteItems';
import NoteContext from '../NoteContext';

class Home extends Component {
  static contextType = NoteContext;

  render() {
    return (
      <>
        <div className="group">
          <FolderError>
            <FolderItems folders={this.context.folders} />
          </FolderError>
          <NoteError>
            <NoteItems notes={this.context.notes}
              routeInfo={this.props.routeInfo} />
          </NoteError>
        </div>
      </>
    );
  }
}

export default Home;