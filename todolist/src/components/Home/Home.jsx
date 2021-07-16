import React from "react";
import NotesContainer from "./Notes/NotesContainer";
import NewNoteContainer from "./NewNote/NewNoteContainer";
import s from './Home.module.css'

const Home=(props) => {
    return <div>
        <div className={s.newNote}><NewNoteContainer/></div>
        <hr/>
        <NotesContainer/>
    </div>
}

export default Home