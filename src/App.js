import './App.css';
import NotesList from './Components/NotesList';
import Searchbar from "./Components/Searchbar";
import { useState, useEffect } from 'react'

function App() {
  //deliverables for march 29th - click to edit each note, category filter, more styling 
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])

  const searchedNotes = notes.filter(note => note.body.toLowerCase().includes(search))
  
  return (
    <div className="App">
      <Searchbar search={search} setSearch={setSearch} />
      <NotesList notes={notes} setNotes={setNotes} searchedNotes={searchedNotes} />
    </div>
  );
}

export default App;
