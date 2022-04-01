import { useState } from 'react'


function AddNotes({notes, setNotes}){

    const [modal, setModal] = useState(false)

    function handleModal () {
        setModal(prev => !prev)
        

    }

    const lastModified = new Date().toLocaleDateString("en-US",{
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    })
    

    const [noteState, setNoteState]= useState({
        body: "",
        date: lastModified,
        category: ""
        
    })
  
    function handleChange(e){
        setNoteState({...noteState, [e.target.name]: e.target.value, date: lastModified})
    }

    function saveNote (){
        const newNote = {
            body: noteState.body,
            date: lastModified,
            category: noteState.category
        }
        fetch('http://localhost:3001/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newNote)
        })
        .then(res => res.json())
        .then(data => setNotes([...notes, data]))
        setNoteState({
            body: "",
            category: "",
            date: lastModified
        })
        setModal(false)
    }

    return(
        <div  className={!modal ? "note-new" : "note-new modal"} >
            <textarea rows="8" columns="10" placeholder="enter your note here..." name="body" onChange={handleChange} value={noteState.body}></textarea>
            <div className="note-footer">
                <select className="category-select" name="category" onChange={handleChange} value={noteState.category}>
                    <option name="Any">Any</option>
                    <option name="reminder">Reminder</option>
                    <option name="personal">Personal</option>
                    <option name="errand">Errand</option>
                    <option name="misc">Misc.</option>
                </select>
                <button className="save" onClick={saveNote}>Save note</button>
                <img id="book" alt="book-animation" src="https://i.pinimg.com/originals/66/8a/8c/668a8cccacc792924fa588b4adca8f68.gif" style={{height: "30px", width: "30px"}} onClick={handleModal} />
            </div>
        </div>
    )
}

export default AddNotes;