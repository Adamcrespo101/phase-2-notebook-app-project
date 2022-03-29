import React from 'react'
import {useEffect} from 'react'
import DeletedNotes from './DeletedNotes'

function DeletedFiles({setDeletedNotes, deletedNotes}) {
    console.log(deletedNotes)

  return (
    <div>{deletedNotes.map(dn => {
        return <DeletedNotes key={dn.id} dn={dn}/>
    })}</div>
  )
}

export default DeletedFiles