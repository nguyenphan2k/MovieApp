import React from 'react'
import img from '../../assets/main.jpg'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto'>
      <div className='max-h-[400px] relative'>
        {/*Banner*/}
        <div className='absolute w-full h-full text-white max-h-[300px]
        flex flex-col justify-center'>
          <h2 className='px-8 text-[48px] font-bold'>Welcome.</h2>
          <h3 className='px-8 text-[32px] font-medium mb-4'>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className='ml-8 mt-6 bg-white w-[95%] rounded-full flex items-center justify-between'>
            <input
              type="text"
              placeholder='Search for a movie, tv show, person...'
              className='bg-transparent outline-none focus:text-gray-400 py-2.5 px-5 w-full 
              cursor-pointer text-gray-600'
            />
            <button className='text-white bg-green-300 rounded-full py-2.5 
            px-[26px] font-bold hover:text-black transition duration-300'>Search</button>
          </div>
        </div>
        <img src={img} alt="img" className='w-full h-[300px]'/>
      </div>
    </div>
  )
}

export default Hero