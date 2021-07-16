import React, {useState} from "react";
import s from './Note.module.css'
import {IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const Note = ({note, deleteNote, doneNote, undoneNote}) => {

    const [isCheked, setIsChecked] = useState(note.done)

    const ActionBtn = () => <div>{!isCheked
        ? <IconButton
            disabled={!isCheked}
            onClick={() => {
                deleteNote(note.id)
            }}
            aria-label="delete">
            <DeleteIcon/>
        </IconButton>
        : <IconButton
            disabled={!isCheked}
            onClick={() => {
                deleteNote(note.id)
            }}
            aria-label="delete">
            <DeleteIcon style={{color: 'red'}}/>
        </IconButton>}</div>
    return (
        <Paper style={{maxWidth: '800px', margin: "0 auto", minHeight: '60px', maxHeight: '60px'}} variant="outlined">
            <div className={s.task}>
                <Checkbox
                    onClick={() => {
                        if (isCheked)
                            undoneNote(note.id)
                        else
                            doneNote(note.id)
                        setIsChecked(!isCheked)
                    }}
                    checked={isCheked}
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
                <p>{note.title}</p>
                <ActionBtn/>
            </div>
        </Paper>
    )
}

export default Note