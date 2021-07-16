import React from "react";
import {connect} from "react-redux";
import Notes from "./Notes";
import {deleteNoteAC, doneNoteAC, undoneNoteAC} from "../../../redux/notes-reducer";

const NotesContainer = (props) => {

    return <Notes undoneNote={props.undoneNote} doneNote={props.doneNote} deleteNote={props.deleteNote} notes={props.notes}/>
}

let mapStateToProps = (state) => {
    return {
        notes:state.notesPage.notes
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteNote: (noteId) => dispatch(deleteNoteAC(noteId)),
        doneNote:(noteId) => dispatch(doneNoteAC(noteId)),
        undoneNote:(noteId) => dispatch(undoneNoteAC(noteId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesContainer)