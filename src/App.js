import './App.css';
import NotesList from './Component/NotesList';
import Searchbar from './Component/Searchbar';
import { useState, useEffect } from 'react'
import DeletedFiles from './Component/DeletedFiles';

function App() {
  //Categories will include Personal, errands, reminder, misc
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState({category: 'All'})
  const [state, setState] = useState(true)
  const [deletedNotes, setDeletedNotes] = useState([])
  

    function toggleDel(e){
    setState(prev => !prev)
    if(state === true){
      fetch("http://localhost:3001/deleted")
      .then(res => res.json())
      .then(data => setDeletedNotes(data))
    }
    }
  
 
 


    function handlefetch(){
    if(cat.category === 'All'){
      fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
    }else{
      fetch(`http://localhost:3001/notes?category=${cat.category}`)
      .then(res => res.json())
      .then(data => setNotes(data))
    }
  }
 
  useEffect(() => {
    fetch('http://localhost:3001/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  const searchedNotes = notes.filter(note => note.body.toLowerCase().includes(search.toLowerCase()))
 
  
  return (
    <div className="App">
      <Searchbar setSearch={setSearch} setCat={setCat} handlefetch={handlefetch} notes={searchedNotes} toggleDel={toggleDel} state={state} />
      {state ? <NotesList notes={searchedNotes} setNotes={setNotes}/> : <DeletedFiles setDeletedNotes={setDeletedNotes} deletedNotes={deletedNotes} setNotes={setNotes} notes={notes} />}
      {/* <NotesList notes={searchedNotes} setNotes={setNotes}/> */}
    </div>
  );
}

export default App;