import Note from "./Note";
import AddNotes from "./AddNotes";
import { useState } from 'react'

function NotesList({notes, setNotes, searchedNotes}){

    const [noteState, setNoteState]= useState({
        body: "",
        date: "",
        category: ""
    })

    const [selectedNote, setSelectedNote]= useState({})

    function saveNote (){
        const newNote = {
            body: noteState.body,
            date: noteState.date,
            category: noteState.category
        }
        fetch('http://localhost:3001/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        })
        .then(res => res.json())
        .then(data => setNotes([...notes, data]))
        setNoteState({
            body: "",
            category: "",
            date: ""
        })
    }



    return(
        <div className="notes-list">
                {searchedNotes.map(note => {
                return <Note key={note.id} 
                        notes={notes} 
                        id={note.id} 
                        body={note.body} 
                        date={note.date} 
                        category={note.category} 
                        setNotes={setNotes}
                        noteState={noteState}
                        setSelectedNote={setSelectedNote}
                        note={note}
                        selectedNote={selectedNote}/>
                })}
                
                <AddNotes  notes={notes} setNotes={setNotes} noteState={noteState} setNoteState={setNoteState} saveNote={saveNote}/>
        </div>
    )
}


export default NotesList;