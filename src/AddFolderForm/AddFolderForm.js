import React, { Component } from 'react';
import NoteContext from '../NoteContext';

class AddFolderForm extends Component {
  static contextType = NoteContext;

  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.folderName.value);
    let folderName = e.target.folderName.value;

    if(folderName === '') {
      return alert('Enter a valid name');
    }
    if(this.context.folders.find(folder => folder.name === folderName) !== undefined) {
      return alert('Folder already exists')
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: `${folderName}`,
        id: `${folderName}`
      })
    }

    fetch(`http://localhost:9090/folders/`, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                alert('something went wrong');
            })

    this.context.addFolder(folderName);

    this.props.routeInfo.history.push('/');
  }

  render() {
    return (
      <>
        <form className="item" onSubmit={e => this.handleSubmit(e)}>
          <div>
            <h3>Name</h3>
            <input type="text" id="folderName" />
            <br/>
            <button type="submit">Add Folder</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddFolderForm;