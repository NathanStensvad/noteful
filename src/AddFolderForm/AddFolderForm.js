import React, { Component } from 'react';
import NoteContext from '../NoteContext';

class AddFolderForm extends Component {
  static contextType = NoteContext;

  handleSubmit = e => {
    e.preventDefault();
    let folderName = document.getElementById('textBox').value;

    if(folderName === '') {
      return alert('Enter a valid name');
    }
    if(this.context.folders.find(folder => folder.name === folderName) !== undefined) {
      return alert('Folder already exists')
    }

    this.context.addFolder(folderName);

    this.props.routeInfo.history.push('/');
  }

  render() {
    return (
      <>
        <form className="item" onSubmit={this.handleSubmit}>
          <div>
            <h3>Name</h3>
            <input type="text" id="textBox" />
            <button type="submit">Add Folder</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddFolderForm;