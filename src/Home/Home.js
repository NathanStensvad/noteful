import React, { Component } from 'react';
import FolderItems from '../FolderItems/FolderItems';
import NoteItems from '../NoteItems/NoteItems';

class Home extends Component {
  render() {
    return (
      <>
        <div className="group">
          <FolderItems folders={this.props.folders}/>
          <NoteItems notes={this.props.notes}/>
        </div>
      </>
    );
  }
}

export default Home;