import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FolderItems extends Component {
  render() {
    return (
      <section className="item folders">
        {this.props.folders.map(folder => (
          <h2 key={folder.id}>
            <Link to={`/folders/${folder.id}`}>{folder.name}</Link>
          </h2>
        ))}
        <Link to={'/add-folder'}><h3>Add folder</h3></Link>
      </section>
    );
  }
}

export default FolderItems;