


function Searchbar({setSearch, setCat, handleSearch, handlefetch, toggleDel, state, handleMode}){

    function handleSearch(e){
        setSearch(e.target.value)
    }

return(
    <>
    {state ?   <div className="search-container">
    <label className="search-label">
    <input type="text" placeholder="search for a note here..." onChange={handleSearch}/>
    {/* <input type="submit" value="🔍"/> */}
    <select className="category-select" onChange={(e) => setCat({category: e.target.value})}>
        <option name="All">All</option>
        <option name="reminder">Reminder</option>
        <option name="personal">Personal</option>
        <option name="errand">Errand</option>
        <option name="misc">Misc.</option>
    </select>
    <input type="submit" value="Filter By Category 🔍"onClick={handlefetch} />

    <input type="submit" value="Recycling Bin 🚮" onClick={toggleDel}/>
    <input type="submit" onClick={handleMode} value="Drawing Pad 🎨"/>
    </label>
    <h1 id="more-notes">Memo-Rise ☀️</h1>
    <h3 id="more-notes">Add/Edit Notes:</h3>
    </div> 

    :
    

<div className="search-container">
        <h1 id="more-notes">Memo-Rise ☀️</h1>
        <h3 id="more-notes">Recycle ♻️ or Delete Forever ☠️</h3>
        <label className="search-label">
    <input type="text" placeholder="search for a deleted note here..." onChange={handleSearch}/>
    {/* <input type="submit" value="🔍"/> */}
    {/* <select className="category-select" onChange={(e) => setCat({category: e.target.value})}>
        <option name="All">All</option>
        <option name="reminder">Reminder</option>
        <option name="personal">Personal</option>
        <option name="errand">Errand</option>
        <option name="misc">Misc.</option>
    </select> */}
    {/* <input type="submit" value="🔍"onClick={handlefetch} /> */}

    <input type="submit" value="🏠" onClick={toggleDel}/>
    </label>

    </div>



}

    

    </>
)
}

export default Searchbar;