import React from "react";
import Note from "./Note";

const Notes = ({notes, deleteNote, doneNote,undoneNote}) => {

    return (<div>
            <h2 style={{color:'#fff'}}>Active tasks: {notes.filter(note=>(!note.done)).length}</h2>
            {notes.map(note => (!note.done && <Note undoneNote={undoneNote} doneNote={doneNote} deleteNote={deleteNote} key={note.id} note={note}/>))}
            {notes.map(note => (note.done && <Note undoneNote={undoneNote} doneNote={doneNote} deleteNote={deleteNote} key={note.id} note={note}/>))}
        </div>
    )
}

export default Notes