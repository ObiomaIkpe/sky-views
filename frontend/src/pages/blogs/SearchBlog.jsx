import React, { useState } from 'react'

const SearchBlog = ({search, category, handleSearchChange, handleSearch}) => {
    const handleKeyPress = (event) => {
        if(event.key === "enter"){
            handleSearch()
    }
}
    

  return (
    <div className='w-full flex'>
        <input type='text' 
        placeholder='search' 
        value={search}
        onChange={handleSearchChange}
        onKeyUp={handleKeyPress}
        className='py-2 px-4 mr-5 w-full bg-[#f7f8f9] focus:outline-none focus:border'/>
        <button className='bg-[#1a73be] px-4 py-2 text-white'>search</button>
    </div>
  )
}

export default SearchBlog