import React, { useState } from 'react'
import movie1 from '../../assets/ghost.jpg'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Movie() {
     const shows = useSelector((state) => state.allLists.lists)
     const renderList = shows.map((detail, index) => {
          const {id, title, release_date} = detail
          // console.log(detail);
          return (
               <Link key={index} to={`/detail/${id}`}>
                    <div className='flex flex-col pl-5 gap-2 '>
                         <div className=''>
                              <img src={movie1} alt="movie1" className='w-[150px] h-[225px] shadow-sm
                         rounded-md' />
                         </div>
                         <div className='flex flex-col w-[150px]'>
                              <h1 className='font-bold'>{title}</h1>
                              <p className='font-normal text-slate-500'>{release_date}</p>
                         </div>
                    </div>
               </Link>
          )
     })

     // console.log(typeof renderList);
     
     return (
          <div className='flex pb-5 px-5 overflow-x-scroll'>
               {renderList}
          </div>
     )
}

export default Movie