import React, { Component } from 'react';
import NoteContext from '../NoteContext';

class AddNoteForm extends Component {
  static contextType = NoteContext;

  handleSubmit = e => {
    e.preventDefault();
    let name = e.target.name.value;
    let content = e.target.content.value;
    let folder = e.target.folderSelect.value;

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${name}`,
        modified: `${new Date().toISOString()}`,
        folderId: `${folder}`,
        content: `${content}`,
        id: `${name}`
      })
    }

    fetch(`http://localhost:9090/notes/`, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                alert('something went wrong');
            })

    this.context.addNote(name, content, folder);

    this.props.routeInfo.history.push('/');
  }

  render() {
    return (
      <>
        <form className="item" onSubmit={e => this.handleSubmit(e)}>
          <div>
            <h3>Name</h3>
            <input type="text" id="name" required/>
          </div>
          <div>
            <h3>Content</h3>
            <input type="text" id="content" required/>
          </div>
          <div>
            <h3>Folder</h3>
            <select id="folderSelect" required>
              {this.context.folders.map(folder => (
                <option key={folder.id} id={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
            <br/>
            <button type="submit">Add Note</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddNoteForm;