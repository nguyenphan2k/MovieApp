import React from 'react'

function SearchButton() {
     return (
          <button className='h-11 text-white px-7 py-3 font-bold rounded-full
          bg-green-200 bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue
          hover:text-black transition-all duration-200 flex items-center'>
               Search
          </button>
     )
}

export default SearchButton