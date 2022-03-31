import {useState} from 'react'
import uuid from 'react-uuid'

function Note({id, notes, setNotes, note,}){
    const [classState, setClassState] = useState(true)
    


    const lastModified = new Date().toLocaleDateString("en-GB",{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })


    
    function deleteNote (){
        fetch(`http://localhost:3001/deleted`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })

        fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE"
        })
        const deletedNote = notes.filter(note => note.id !== id)
        setNotes(deletedNote)
      }


      function patchNotes(){
          fetch(`http://localhost:3001/notes/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({  
                body: note.body,
                category: note.category,
                date: lastModified
          }),
          headers: {
          'Content-Type': 'application/json'
          },
          })
          .then(res => res.json())
          .then(setNotes(notes.map(n => {
              if(n === note){
                  return {...n, date: lastModified}
              }
              else{return n}
          })))
          changeclass()
      }


      function changeclass(){
          setClassState(prev => !prev)
      }


    return(
        <>
        {classState ? 

        <div className= 'Note' >
              <span>{note.body}</span>
                <div className="note-footer">
                <small>Category: {note.category} </small>
                <small>| Date: {note.date}</small>
                <small className="delete-icon" onClick={deleteNote}>🗑️</small>
                <small className='edit-icon ' onClick={changeclass}>✏️</small>
                 </div>
        </div>



        : 



        <div className= 'note-new modal' >
        <textarea
        value={note.body}
        onChange={(e)=> setNotes(notes.map(n => {
            if(n === note ){
                return {...n, body: e.target.value}
            }else{
                return n
            }
        }))}
        ></textarea>
          <div className="note-footer">
          <select className="category-select" name="category" onChange={(e)=> setNotes(notes.map(n => {
              if(n === note){
                  return {...n, category: e.target.value}
              }else{
                  return n
              }
          }))} >    <option name="Any">Any</option>
                    <option name="reminder">Reminder</option>
                    <option name="personal">Personal</option>
                    <option name="errand">Errand</option>
                    <option name="misc">Misc.</option>
                </select>
          <small className='edit-icon' onClick={patchNotes}>🆕</small>
          <small className="delete-icon" onClick={deleteNote}>🗑️</small>
          <small className="delete-icon" onClick={changeclass}>🔙</small>
           </div>
        </div>

        }
       
    </>
    )
}

export default Note;  