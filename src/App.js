import './App.css';
import NotesList from './Components/NotesList';
import Searchbar from "./Components/Searchbar";
import { useState, useEffect } from 'react'

function App() {
  //Categories will include Personal, errands, reminder, misc
  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])


  
  return (
    <div className="App">
      <Searchbar />
      <NotesList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
