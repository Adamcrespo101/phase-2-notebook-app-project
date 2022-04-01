import './App.css';
import NotesList from './Component/NotesList';
import Searchbar from './Component/Searchbar';
import { useState, useEffect } from 'react'
import DeletedFiles from './Component/DeletedFiles';
import uuid from 'react-uuid'
import DrawingArea from './Component/DrawingArea';





function App() {
  //Categories will include Personal, errands, reminder, misc
  const [notes, setNotes] = useState([])
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState({category: 'All'})
  const [state, setState] = useState(true)
  const [deletedNotes, setDeletedNotes] = useState([])
  const [drawingMode, setDrawingMode] = useState(false)

  function handleMode(){
    setDrawingMode(prev => !prev)
  }
  

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
  const searchdeleted = deletedNotes.filter(note => note.body.toLowerCase().includes(search.toLowerCase()))
 
  
  return (
    <div className="App">
      <Searchbar setSearch={setSearch} handleMode={handleMode} setCat={setCat} handlefetch={handlefetch} notes={searchedNotes} toggleDel={toggleDel} state={state} />
      
      {
      
      !state ? <DeletedFiles setDeletedNotes={setDeletedNotes} deletedNotes={searchdeleted} setNotes={setNotes} notes={notes} /> 
      
      : drawingMode && state ? <DrawingArea/> 
     
     :  <NotesList notes={searchedNotes} setNotes={setNotes}/>
     
     }
    </div>
  );
}

{/*!state ?  <DeletedFiles setDeletedNotes={setDeletedNotes} deletedNotes={deletedNotes} setNotes={setNotes} notes={notes} /> : 
       mode ?  <DrawingArea /> : <NotesList notes={searchedNotes} setNotes={setNotes}/>
  */}

export default App;