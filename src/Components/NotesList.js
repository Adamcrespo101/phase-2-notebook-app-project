import Note from "./Note";
import AddNotes from "./AddNotes";

function NotesList({notes, createNote, setNotes}){
    return(
        <div className="notes-list">
                {notes.map(note => {
                return <Note key={note.id} body={note.body} date={note.date} category={note.category}/>
                })}
                
                <AddNotes createNote={createNote} notes={notes} setNotes={setNotes}/>
        </div>
    )
}


export default NotesList;