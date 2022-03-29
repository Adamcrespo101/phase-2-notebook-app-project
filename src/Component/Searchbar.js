


function Searchbar({setSearch, setCat, handleSearch, handlefetch, toggleDel, state}){

    function handleSearch(e){
        setSearch(e.target.value)
    }

return(
    <div className="search-container">
        <h1 id={state ? "more-notes" : "deleted-notes"}>{state ? "More Notes": "Deleted Notes"}</h1>
    <input type="text" placeholder="search for a note here..." onChange={handleSearch}/>
    <input type="submit" value="🔍"/>
    <select className="category-select" onChange={(e) => setCat({category: e.target.value})}>
        <option name="All">All</option>
        <option name="reminder">Reminder</option>
        <option name="personal">Personal</option>
        <option name="errand">Errand</option>
        <option name="misc">Misc.</option>
    </select>
    <input type="submit" value="🔍"onClick={handlefetch} />

    <input type="submit" value="🚮" onClick={toggleDel}/>

    </div>
)
}

export default Searchbar;