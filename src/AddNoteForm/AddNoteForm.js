import React, { Component } from 'react';
import NoteContext from '../NoteContext';

class AddNoteForm extends Component {
  static contextType = NoteContext;

  handleSubmit = e => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let content = document.getElementById('content').value;
    let folder = document.getElementById('folder-select').value;

    if (name === '') {
      return alert('Enter a valid name')
    }

    this.context.addNote(name, content, folder);

    this.props.routeInfo.history.push('/');
  }

  render() {
    return (
      <>
        <form className="item" onSubmit={this.handleSubmit}>
          <div>
            <h3>Name</h3>
            <input type="text" id="name" />
          </div>
          <div>
            <h3>Content</h3>
            <input type="text" id="content" />
          </div>
          <div>
            <h3>Folder</h3>
            <select id="folder-select">
              {this.context.folders.map(folder => (
                <option key={folder.id} id={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
            <button type="submit">Add Note</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddNoteForm;