import React, { Component } from 'react';

class AddFolderForm extends Component {
  render() {
    return (
      <>
        <form className="item">
          <div>
            <h3>Name</h3>
            <input type="text" />
            <button type="submit">Add Folder</button>
          </div>
        </form>
      </>
    );
  }
}

export default AddFolderForm;