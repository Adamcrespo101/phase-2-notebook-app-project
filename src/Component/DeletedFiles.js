import React from 'react'
import DeletedNotes from './DeletedNotes'

function DeletedFiles({setDeletedNotes, deletedNotes, setNotes, notes}) {
    

  return (
    <div>{deletedNotes.map(dn => {
        return <DeletedNotes key={dn.id} dn={dn} deletedNotes={deletedNotes} setDeletedNotes={setDeletedNotes} setNotes={setNotes} notes={notes}/>
    })}</div>
  )
}

export default DeletedFiles