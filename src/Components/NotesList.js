import Note from "./Note";
import AddNotes from "./AddNotes";

function NotesList({notes, setNotes, searchedNotes}){
    return(
        <div className="notes-list">
                {searchedNotes.map(note => {
                return <Note key={note.id} notes={notes} id={note.id} body={note.body} date={note.date} category={note.category} setNotes={setNotes}/>
                })}
                
                <AddNotes  notes={notes} setNotes={setNotes}/>
        </div>
    )
}


export default NotesList;