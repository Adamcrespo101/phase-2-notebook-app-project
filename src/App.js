import './App.css';
import NotesList from './Components/NotesList';
import Searchbar from "./Components/Searchbar";
import DrawingArea from './Components/DrawingArea';
import { useState, useEffect } from 'react'

function App() {
  //deliverables march 30th dynamic timestamps for posts, add animations/styling for listener events
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState({category: 'All'})
  const [mode, setMode] = useState(false)

  
  useEffect(() => {
    fetch('http://localhost:3001/notes')
    .then(res => res.json())
    .then(data => setNotes(data))
  }, [])
  
  function handleCatFetch(){
    if (cat.category === "All"){
      fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
    } else {
      fetch(`http://localhost:3001/notes?category=${cat.category}`)
      .then(res => res.json())
      .then(data => setNotes(data))
    }
  }
  const searchedNotes = notes.filter(note => note.body.toLowerCase().includes(search))

  function handleMode(){
    setMode(prev => !prev)
  }
  
  return (
    <div className="App">
      <button onClick={handleMode}>Toggle Note pad/Drawing pad</button>
      {
        mode ? <>
                  <DrawingArea />
                </> 
              :
        <>
          <Searchbar search={search} setSearch={setSearch} setCat={setCat} handleCatFetch={handleCatFetch} />
          <NotesList notes={notes} setNotes={setNotes} searchedNotes={searchedNotes} />
        </>
      }
    </div>
  );
}

export default App;
