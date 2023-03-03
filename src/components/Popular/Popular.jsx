import React from 'react'
import Movie from '../Movie/Movie'

function Popular() {
     return (
          <div className='max-w-[1640px] mx-auto px-8 py-4 mt-3'>
               <div className='flex items-center'>
                    <h2 className='text-2xl font-semibold'>What's Popular</h2>
                    <div className='flex items-center bg-transparent border-2 
                    border-black rounded-full ml-3'>
                         <p className='bg-[#032541] rounded-full py-0.5 px-4 text-[#c0fecf] font-medium'>On TV</p>
                         <p className='py-0.5 px-4 font-medium'>In Threaters</p>
                    </div>
               </div>
               <Movie />
          </div>
     )
}

export default Popular