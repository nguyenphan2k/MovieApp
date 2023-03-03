import React from 'react'
import TMDB from '../../assets/photo.svg'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
     return (
          <div className='max-w-[1640px] h-[64px] mx-auto flex justify-between 
          items-center bg-[#032541] text-white px-[40px]'>
               {/*Left Side*/}
               <div className='flex items-center'>
                    <img
                         src={TMDB}
                         alt="img"
                         className='w-[154px] cursor-pointer'
                    />
                    <div>
                         <ul className='flex'>
                              <li className='ml-4 text-[16px] p-2 font-bold cursor-pointer'>TVShows</li>
                              <li className='text-[16px] p-2 font-bold cursor-pointer'>Movies</li>
                              <li className='text-[16px] p-2 font-bold cursor-pointer'>People</li>
                              <li className='text-[16px] p-2 font-bold cursor-pointer'>More</li>
                         </ul>
                    </div>
               </div>
               {/*Right Side*/}
               <div className='flex items-center space-x-7 mr-5'>
                    <IoIosAddCircleOutline size={25} />
                    <button className='py-0.5 px-1.5 hover:bg-white hover:text-black
                    border-2 rounded transition duration-300'>EN</button>
                    <div className='flex space-x-7'>
                         <Link
                              to="/login"
                              className='font-bold cursor-pointer'>
                              Login
                         </Link>
                         <Link
                              to='/attend'
                              className='font-bold cursor-pointer'>
                              Attend
                         </Link>
                    </div>
                    <AiOutlineSearch size={25} />
               </div>
               {/*Mobile Menu*/}
               <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 hidden'>

               </div>
               {/*Side Bar Menu*/}
               <div className='hidden fixed w-[300px] bg-white h-screen z-10 top-0 left-0
               duration-300'>
                    <AiOutlineClose size={25} className='absolute text-black right-4 top-4' />
               </div>
          </div>
     )
}

export default Header