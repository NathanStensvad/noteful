import React, { Component } from 'react';

class AddNoteForm extends Component {

  render() {
    return (
      <>
        <form className="item">
          <div>
            <h3>Name</h3>
            <input type="text" />
            <button type="submit">Add Folder</button>
          </div>
          <div>
            <h3>Content</h3>
            <input type="text" />
            <button type="submit">Add Folder</button>
          </div>
          <div>
            <h3>Folder</h3>
            <select id="folder-select">
              {this.props.folders.map(folder => (
        <option key={folder.id}>
          {folder.name}
        </option>
        ))}
            </select>
            <button type="submit">Add Folder</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddNoteForm;