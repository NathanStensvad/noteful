import React, { Component } from 'react';
import NoteContext from '../NoteContext';
import config from '../config';

class AddFolderForm extends Component {
  static contextType = NoteContext;

  handleSubmit = e => {
    e.preventDefault();

    //Detect the input from the form
    let folderName = e.target.folderName.value;

    //validations
    if(this.context.folders.find(folder => folder.name === folderName) !== undefined) {
      return alert('Folder already exists')
    }

    //fetch request

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

    fetch(`${config.API_ENDPOINT}/folders/`, requestOptions)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          alert('something went wrong');
        })
    
    //Add the folder in context and go to home
    this.context.addFolder(folderName);
    this.props.routeInfo.history.push('/');
  }

  render() {
    return (
      <>
        <form className="item" onSubmit={e => this.handleSubmit(e)}>
          <div>
            <h3>Name</h3>
            <input type="text" id="folderName" required/>
            <br/>
            <button type="submit">Add Folder</button>
          </div>
        </form>
      </>
    );
  }
}
export default AddFolderForm;