import React from 'react'

function DeletedNotes({dn}) {
  return (
    <div className= 'deleted' >
              <span>{dn.body}</span>
                <div className="note-footer">
                <small>Category: {dn.category} </small>
                <small>| Date: {dn.date} </small>
                <small className="delete-icon">🗑️</small>
                <small className='edit-icon '>✏️</small>
                 </div>
        </div>
  )
}

export default DeletedNotes