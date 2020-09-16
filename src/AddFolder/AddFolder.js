import React, { Component } from 'react';
import BackButton from '../BackButton/BackButton';
import AddFolderForm from '../AddFolderForm/AddFolderForm';

class AddFolder extends Component {
  render() {
    return (
      <>
        <div className="group">
          <BackButton/>
          <AddFolderForm/>
        </div>
      </>
    );
  }
}

export default AddFolder;