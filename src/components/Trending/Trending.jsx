import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Movie from '../Movie/Movie'
import { setLists } from '../../redux/actions/listAction'
import axios from 'axios'

function Trending() {
     const [changeStatus, setChangeStatus] = useState('Today')
     const lists = useSelector((state) => state)
     const dipatch = useDispatch()
     const getApi = async () => {
          const res = await axios
               .get('https://api.themoviedb.org/3/movie/upcoming?api_key=b22286e95cee300300efc5199fdf32be&language=en-US')
               .catch((err) =>{
                    console.error(err)
               });
               dipatch(setLists(res.data))
     }
     // console.log(lists);
     useEffect(() => {
          getApi()
     }, [])
     // console.log("click", lists);
     return (
          <div className='max-w-[1640px] mx-auto px-8 py-4 mt-3'>
               <div className='flex items-center'>
                    <h2 className='text-2xl font-semibold'>Trending</h2>
                    <div className='flex items-center bg-transparent border-2 
                    border-black rounded-full ml-3'>
                         <p
                              onClick={() => setChangeStatus(!changeStatus)}
                              className={`${changeStatus
                                   ? "bg-[#032541] rounded-full py-0.5 px-4 text-[#c0fecf] font-medium" : ""}`}>
                              {changeStatus}
                         </p>
                         <p className='py-0.5 px-4 font-medium'>This Week</p>
                    </div>
               </div>
               {changeStatus ? <Movie /> : ""}
          </div>
     )
}

export default Trending