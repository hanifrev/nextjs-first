const Search = ({ search, onSeacrh }) => {
    return (
    <div>
        <label htmlFor="search">Search: </label>
        <input 
            id="search"
            type="text"
            value={search}
            onChange={onSeacrh}
        />
    </div>
    )
    
}

export default Search;