import React from "react";
import NewNote from "./NewNote";
import {addNoteAC} from "../../../redux/notes-reducer";
import {connect} from "react-redux";

const NewNoteContainer = (props) => {

    return <NewNote addNote={props.addNote}/>
}

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNote:(note) => dispatch(addNoteAC(note))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewNoteContainer)