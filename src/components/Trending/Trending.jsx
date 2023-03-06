import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Movie from '../Movie/Movie'
import { setLists } from '../../redux/actions/listAction'
import axios from 'axios'

function Trending() {
     const [changeStatus, setChangeStatus] = useState('On TV')
     // const lists = useSelector((state) => state)
     const dipatch = useDispatch()
     const getApi = async () => {
          await axios
               .get('https://api.themoviedb.org/4/list/1?page=1&api_key=01f0efd4e09d2f9ee03497080f858016')
               .then(data => dipatch(setLists(data.data.results)))
               .catch((err) => {
                    console.error(err)
               });
     }
     useEffect(() => {
          getApi()
     }, [])
     return (
          <div className='max-w-[1640px] mx-auto px-8 py-4 mt-3'>
               <div className='flex items-center'>
                    <h2 className='text-2xl font-semibold'>Trending</h2>
                    <div className='flex items-center bg-transparent border-2 
                    border-black rounded-full ml-3 cursor-pointer'>
                         <p
                              onClick={() => setChangeStatus("On TV")}
                              className={`${changeStatus === "On TV" 
                              ? "bg-[#032541] rounded-full py-0.5 px-4 text-[#c0fecf] font-medium transition duration-200"  
                              : "rounded-full py-0.5 px-4 text-[#032541] font-medium"}`}>On TV</p>
                         <p
                              onClick={() => setChangeStatus("This Week")}
                              className={`${changeStatus === "This Week"
                              ? "bg-[#032541] rounded-full py-0.5 px-4 text-[#c0fecf] font-medium transition duration-200"
                              : 'py-0.5 px-4 font-medium'}`}>This Week</p>
                    </div>
               </div>
               {changeStatus === 'On TV' ? <Movie /> : <Movie />}
          </div>
     )
}

export default Trending