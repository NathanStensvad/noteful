import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NoteContext from '../NoteContext';
import config from '../config';

class DeleteButton extends Component {
    
    static contextType = NoteContext;

    handleDelete = e => {
        e.preventDefault();
        let deletedNote = e.target.id;
        
        fetch(`${config.API_ENDPOINT}/notes/${deletedNote}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                alert('something went wrong');
            })

        if(this.props.routeInfo.location.pathname.startsWith("/notes/")) {
            this.props.routeInfo.history.push('/');
        }

        this.context.deleteNote(deletedNote);
    }


    //The props here is coming from a map from NoteItems.js ; I'm also using it in Note.js
    render() {
        return (
            <button type="button" onClick={this.handleDelete} id={this.props.id}>Delete Note</button>
        )
    }
}
/*
DeleteButton.propTypes = {
    id: PropTypes.number
};*/

export default DeleteButton;