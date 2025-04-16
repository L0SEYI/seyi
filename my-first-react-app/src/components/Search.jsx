import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="search">
    <div>
<img src="search.svg" alt="search" />
<input 
type="text"
placeholder='Search for movies, series, and more...'
value={searchTerm}
onChange={(e) => setSearchTerm(event.target.value)}
/>
        </div>
    </div>
  )
}

export default Search
