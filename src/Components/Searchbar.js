

function Searchbar({search, setSearch, handleCatFetch, setCat}){

        function handleSearch(e){
            setSearch(e.target.value)
        }


    return(
        <div className="search-container">
            <h1 className="more-notes">More-Notes</h1>
        <input type="text" placeholder="search for a note here..." onChange={handleSearch}/>
        <input type="submit" value="🔍"/>
        <div className="search-by-cat">
        <label>Search By Category:</label>
        <select className="category-select" onChange={(e) => setCat({category: e.target.value})}>
            <option name="all">All</option>
            <option name="reminder">Reminder</option>
            <option name="personal">Personal</option>
            <option name="errand">Errand</option>
            <option name="misc">Misc.</option>
        </select>
        <button onClick={handleCatFetch} id="filter-cat">🔍</button>
        </div>
        </div>
    )
}

export default Searchbar;