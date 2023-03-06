import React,{useState} from 'react'
import movie1 from '../../assets/ghost.jpg'
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Movie() {
     const shows = useSelector((state) => state.allLists.lists)
     // const [slideList, setSlideList] = useState([])
     const renderList = shows
     console.log(renderList);
     return (
          <div className='max-w-[1640px] mx-auto px-3 py-4 mt-3 grid gap-6 md:grid-cols-8 sm:grid-cols-4'>
               {/*Card*/}
               {renderList.map((render) => (
                    <div key={render.id}>    
                         <div className='relative'>
                              <HiOutlineDotsCircleHorizontal
                                   className='absolute top-2 right-1 text-xl hover:bg-blue-500 
                                        rounded-full transition duration-200 bg-gray-300 text-black'
                              />
                              <div>
                                   <Link to='/detailmovie'>
                                        <img
                                             src={movie1}
                                             alt="movie1"
                                             className='w-[150px] rounded-lg'
                                        />
                                   </Link>
                              </div>
                         </div>
                         <div>
                              <p className='text-[18px] mt-2 font-bold hover:text-blue-400
                                        transition duration-300 cursor-pointer'>{render.title}</p>
                              <p className='text-[14px] text-gray-400'>{render.release_date}</p>
                         </div>
                    </div>
               ))}
          </div>
     )
}

export default Movie