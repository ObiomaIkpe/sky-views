import React, { useState } from 'react'
import SearchBlog from './SearchBlog'

const Blogs = () => {

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [query, setQuery] = useState({search: "", setCategory: ""});

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => { 
        setQuery({search, category})
    }

  return (
    <div className='mt-16 container mx-auto'>
        <div>Search </div>
        <SearchBlog search={search} category={category} handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}/>
        </div>
  )
}

export default Blogs