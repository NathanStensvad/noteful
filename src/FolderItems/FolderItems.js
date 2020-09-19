import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from '../NoteContext';

class FolderItems extends Component {
  static contextType = NoteContext;

  highlightFolder() {
    console.log(this.props.routeInfo.match.params.id);
    let a = document.getElementById("b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1")
    console.log(a);
  }

  render() {
    return (
      <section className="item folders">
        {this.context.folders.map(folder => (
          <h2 key={folder.id} id ={folder.id}>
            <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
          </h2>
        ))}
        <Link to={'/add-folder'}><h3>Add folder</h3></Link>
      </section>
    );
  }
}

export default FolderItems;