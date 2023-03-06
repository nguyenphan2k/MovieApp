import React from 'react'

function SearchInput() {
  return (
    <div>
         <input type="text" className='w-full outline-none rounded-[8rem] h-11
         px-5 py-3 placeholder:text-slate-500 text-base text-black/50' 
         placeholder='Search for a movie, tv show, person......'/>
    </div>
  )
}

export default SearchInput