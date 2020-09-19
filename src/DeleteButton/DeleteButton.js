import React, { Component } from 'react';
import NoteContext from '../NoteContext';

class DeleteButton extends Component {
    static contextType = NoteContext;

    handleDelete = e => {
        e.preventDefault();
        let deletedNote = e.target.id;
        
        fetch(`http://localhost:9090/notes/${deletedNote}`, { method: 'DELETE' })
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


    render() {
        return (
            <button type="button" onClick={this.handleDelete} id={this.props.id}>Delete Note</button>
        )
    }
}

export default DeleteButton;