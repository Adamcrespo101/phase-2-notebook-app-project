

function Note({date, body, category}){
    return(
        <div className="Note">
            <span>{body}</span>
            <div className="note-footer">
                <small>Category: {category} </small>
                <small>|Date: {date}</small>
                <small className="delete-icon">🗑️</small>
                
            </div>
        </div>
    )
}

export default Note;  

