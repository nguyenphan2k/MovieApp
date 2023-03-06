import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import SearchInput from './SearchInput'
import SearchButton from './SearchButton'

function Hero() {
  const [name, setName] = useState()
  // console.log(name);
  const display = useSelector((state) => state.allLists.lists)
  const renderList = display
  console.log(renderList);
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
              <SearchInput />
              <div className='absolute top-0 right-0'>
                  <SearchButton />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero