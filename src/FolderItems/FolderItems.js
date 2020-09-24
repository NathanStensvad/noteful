import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      <ul className="item">
        {this.context.folders.map(folder => (
          <li key={folder.id} className='Nav_Folders Folder'>
            <NavLink to={`/folders/${folder.id}`}>{folder.name}</NavLink>
          </li>
        ))}
        <li>
        <Link to={'/add-folder'}><h3>Add folder</h3></Link>
        </li>
      </ul>
    );
  }
}

export default FolderItems;