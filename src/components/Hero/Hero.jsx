import React, { useState, useEffect } from 'react'
import SearchButton from './SearchButton'
import axios from 'axios'

function Hero() {
  const [name, setName] = useState("")
  const [lists, setLists] = useState([])
  const getApi = async () => {
    await axios
      .get('https://api.themoviedb.org/4/list/1?page=1&api_key=01f0efd4e09d2f9ee03497080f858016')
      .then(data => setLists((data.data.results)))
      .catch((err) => {
        console.error(err)
      });
  }
  useEffect(() => {
    getApi()
  }, [])
  const handleSearch = (e) => {
    setName(e.target.value)
  }
  return (
    <div className='h-[300px] bg-banner bg-cover py-5 mx-auto'>
      <div className='flex flex-col gap-10 px-10 py-10'>
        <div className='text-white'>
          <h2 className='font-extrabold text-5xl'>Welcome.</h2>
          <h3 className='font-semibold text-[2rem]'>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div className='relative'>
          <input type="text" className='w-full outline-none rounded-[8rem] h-11
         px-5 py-3 placeholder:text-slate-500 text-base text-black/50'
            placeholder='Search for a movie, tv show, person......'
            onChange={handleSearch} />
          <div className='absolute top-0 right-0'>
            <SearchButton />
          </div>
          <div className={`${name ? 'w-full h-[200px] bg-white overflow-y-scroll z-10 absolute' : ""}`}>
            <ul>
              {name === '' ? "": lists?.filter(item => item.title.includes(name)).map((item, index) => (
                <li key={index} className='p-1 border-b-[1px] border-black/20'>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero