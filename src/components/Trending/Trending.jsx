import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLists } from '../../redux/actions/listAction'
import axios from 'axios'
import Index from '../../components/Trending'

function Trending({ title, children, ...props }) {
     const dipatch = useDispatch()
     const getApi = async () => {
          await axios
               .get('https://api.themoviedb.org/4/list/1?page=1&api_key=01f0efd4e09d2f9ee03497080f858016')
               .then(data => dipatch(setLists((data.data.results))))
               .catch((err) => {
                    console.error(err)
               });
     }
     useEffect(() => {
          getApi()
     }, [])
     return (
          <div className='pt-[30px] px-10'>
               <div className='flex items-center gap-5 px-10'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <Index {...props} />
               </div>
               <div className='pt-5'>
                    {children}
               </div>
          </div>
     )
}
export default Trending