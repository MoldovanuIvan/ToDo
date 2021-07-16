import React from "react";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import s from './NewNote.module.css'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    notchedOutline: {
        borderWidth: "3px",
        borderColor: "#3f51b5 !important"
    }
}));

const NewNote = ({addNote}) => {
    let classes = styles()

    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
            note: ''
        },
        onSubmit: ({note}) => {
            addNote(note)
        }
    })

    return <form onSubmit={handleSubmit}>
        <div className={s.form}>
            <TextField  InputProps={{
                classes: {
                    notchedOutline: classes.notchedOutline
                }
            }} inputProps={{ style: { color: 'white'}}} id='newNote' name='note' label="Write your note" type="text" onChange={handleChange}
                       value={values.note}
                       variant="outlined"/>

            <Button style={{height: '60px', marginLeft: '10px'}} type="submit" variant="contained" color="primary">
                Add Note
            </Button>
        </div>
    </form>
}

export default NewNote