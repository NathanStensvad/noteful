import React, { Component } from 'react';
import BackButton from '../BackButton/BackButton';
import AddFolderForm from '../AddFolderForm/AddFolderForm';

class AddFolder extends Component {
  render() {
    return (
      <>
        <div className="group">
          <BackButton/>
          <AddFolderForm
          routeInfo={this.props.routeInfo}/>
        </div>
      </>
    );
  }
}

export default AddFolder;