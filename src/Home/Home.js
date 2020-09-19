import React, { Component } from 'react';
import FolderItems from '../FolderItems/FolderItems';
import NoteItems from '../NoteItems/NoteItems';
import NoteContext from '../NoteContext';

class Home extends Component {
  static contextType = NoteContext;
  render() {
    return (
      <>
        <div className="group">
          <FolderItems folders={this.context.folders}/>
          <NoteItems notes={this.context.notes} 
          routeInfo= {this.props.routeInfo}/>
        </div>
      </>
    );
  }
}

export default Home;