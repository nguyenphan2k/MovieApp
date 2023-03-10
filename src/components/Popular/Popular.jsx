import React from 'react'
import Movie from '../Movie/Movie'
import PopularSwitch from './PopularSwitch'


function Popular({title, items}) {
     return (
          <div className='pt-[30px] px-10'>
               <div className='flex items-center gap-5 px-10'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <PopularSwitch Thumb={items} />
               </div>
               <div className='pt-5'>
                    <Movie />
               </div>
          </div>
     )
}

export default Popular