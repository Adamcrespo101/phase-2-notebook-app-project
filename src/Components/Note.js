import { useState } from 'react'

function Note({date, body, category, id, notes, setNotes, noteState, setSelectedNote, selectedNote, note}){

    const [toggleEdit, setToggleEdit]=useState(true)

    function handleChange(){
        setToggleEdit(prev => !prev)
    }

    function handleClick(){
        setSelectedNote(note)
    }

        
    function deleteNote (){
    fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE"
        })
        const deletedNote = notes.filter(note => note.id !== id)
        setNotes(deletedNote)
      }

      function editNote(){
          console.log(note)
        fetch(`http://localhost:3001/notes/${id}`, {
            method: "PATCH",
            body: JSON.stringify(note),
            headers:{
                "Content-Type": "application/json"
            }
        })
      }
    

      

    return(
        <>
        {toggleEdit ? 
        
            <div className="Note" onClick={handleChange}>
            <span>{body}</span>
            <div className="note-footer">
                <small>Category: {category} </small>
                <small>| Date: {date}</small>
                <small className="edit-icon"  onClick={handleClick}>✏️</small>
                <small className="delete-icon" onClick={deleteNote}>🗑️</small>
            </div>
        </div> 
            
            : 
            
            <div className="note new">
            <textarea rows="8" columns="10" placeholder="enter your note here..." name="body" onChange={(e) => setNotes(notes.map(n => {
             return   n === note ? {...n, body: e.target.value} : n
            })) } value={body}></textarea>
            <div className="note-footer">
                <select className="category-select" name="category" onChange={(e) => setNotes(notes.map(n => {
                    return n === note ? {...n, category: e.target.value} : n
                }))} value={category}>
                    <option name="all">All</option>
                    <option name="reminder">Reminder</option>
                    <option name="personal">Personal</option>
                    <option name="errand">Errand</option>
                    <option name="misc">Misc.</option>
                </select>
                <input type="text" placeholder="enter date MM/DD/YYYY..." name="date" onChange={(e) => setNotes(notes.map(n => {
                    return n === note ? {...n, date: e.target.value} : n
                }))} value={date}/>
                <button className="save" onClick={editNote}>Save</button>
                <small onClick={handleChange} className="back-btn">🔙</small>
            </div>
        </div>}
        </>
    )
}

export default Note;  

