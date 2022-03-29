

function Note({date, body, category, id, notes, setNotes}){

    
    function deleteNote (){
        fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE"
        })
        const deletedNote = notes.filter(note => note.id !== id)
        setNotes(deletedNote)
      }
    

    return(
        <div className="Note">
            <span>{body}</span>
            <div className="note-footer">
                <small>Category: {category} </small>
                <small>| Date: {date}</small>
                <small className="edit-icon">✏️</small>
                <small className="delete-icon" onClick={deleteNote}>🗑️</small>
                
            </div>
        </div>
    )
}

export default Note;  

