import React from 'react'

function DeletedNotes({dn, deletedNotes, setDeletedNotes, setNotes, notes}) {

  const lastModified = new Date().toLocaleDateString("en-GB",{
    hour: "2-digit",
    minute: "2-digit"
})

  function removenotes (){
    fetch(`http://localhost:3001/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...dn, date: lastModified})
    })
    .then(res => res.json())
    .then(data => setNotes([...notes, {...data, date: lastModified}]))

    fetch(`http://localhost:3001/deleted/${dn.id}`, {
        method: "DELETE"
    })
    setDeletedNotes(deletedNotes.filter(note => note.id !== dn.id))
  }


  return (
    <div className='deleted'>
              <span>{dn.body}</span>
                <div className="note-footer">
                <small>Category: {dn.category} </small>
                <small>| Date: {dn.date} </small>
                <small className="delete-icon" onClick={removenotes}>🗑️</small>
                <small className='edit-icon '>✏️</small>
                 </div>
        </div>
  )
}

export default DeletedNotes