

function Searchbar({search, setSearch}){

        function handleSearch(e){
            setSearch(e.target.value)
        }


    return(
        <div className="search-container">
            <h1 id="more-notes">More-Notes</h1>
        <input type="text" placeholder="search for a note here..." onChange={handleSearch}/>
        <input type="submit" value="🔍"/>
        <select className="category-select">
            <option name="all">All</option>
            <option name="reminder">Reminder</option>
            <option name="personal">Personal</option>
            <option name="errand">Errand</option>
            <option name="misc">Misc.</option>
        </select>
        </div>
    )
}

export default Searchbar;