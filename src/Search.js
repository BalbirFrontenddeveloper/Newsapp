import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {

    const { query, searchpost } = useGlobalContext();
  return (
    <>
    <div className='search'>
        <form onSubmit={(e) => e.preventDefault}>
        <input 
        type="text"
        placeholder="Search here"
        value={query}
        onChange={(e) => {searchpost(e.target.value)}}
        />
        </form>
    </div>
    </>
  )
}

export default Search