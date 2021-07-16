const ADD_NOTE = "ADD_NOTE"
const DELETE_NOTE = "DELETE_NOTE"
const DONE_NOTE = "DONE_NOTE"
const UNDONE_NOTE = "UNDONE_NOTE"

const initialState = {
    notes: [
        {id: 0, title: "Купить хлеб", done: false},
        {id: 1, title: "Постирать вещи", done: false},
        {id: 2, title: "Сходить на занятия", done: false}
    ],
    isChecked: false
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            let stateCopy = {...state}
            stateCopy.notes = [...state.notes]
            let idForNewNote = stateCopy.notes.length
            stateCopy.notes.push({id: idForNewNote, title: action.note, done: false})
            return stateCopy
        }
        case DELETE_NOTE: {
            let stateCopy = {...state}
            stateCopy.notes = [...state.notes]
            stateCopy.notes = [...stateCopy.notes.slice(0, action.noteId), ...stateCopy.notes.slice(action.noteId + 1).map(note => ({
                ...note,
                id: note.id - 1
            }))]
            /*stateCopy.notes = [...stateCopy.notes.filter(note=>note.id!==action.noteId)]*/
            debugger
            return stateCopy
        }
        case DONE_NOTE: {

            let stateCopy = {...state}
            stateCopy.notes = [...state.notes]
            stateCopy.notes[action.noteId].done = true
            debugger
            return stateCopy

        }
        case UNDONE_NOTE: {
            let stateCopy = {...state}
            stateCopy.notes = [...state.notes]
            stateCopy.notes[action.noteId].done = false
            return stateCopy
        }
        default:
            return state
    }
    debugger
}
export const doneNoteAC = (noteId) => ({type: DONE_NOTE, noteId})
export const undoneNoteAC = (noteId) => ({type: UNDONE_NOTE, noteId})
export const addNoteAC = (note) => ({type: ADD_NOTE, note})
export const deleteNoteAC = (noteId) => ({type: DELETE_NOTE, noteId})


export default notesReducer