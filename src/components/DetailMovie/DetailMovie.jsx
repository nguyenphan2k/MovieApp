import React, { useEffect } from 'react'
import DetailNavbar from './DetailNavbar'
import DetailHero from './DetailHero'
import DetailCast from './DetailCast'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
// import {useSelector} from 'react-redux'
import {setMovie} from '../../redux/actions/listAction'


function DetailMovie() {
  // const detail = useSelector(state => state.setMovies)
  // console.log(detail);
  const { detailId } = useParams()
  // const dispatch = useDispatch()
  // // console.log(detailId);
  // const fetchDetailMovie = async () => {
  //   const res = await axios.get(`https://api.themoviedb.org/4/list/1?page=1&api_key=01f0efd4e09d2f9ee03497080f858016`)
  //     .then(response => dispatch(setMovie(response.data.results)))
  //     .catch((err) => {
  //       console.error(err)
  //     });
  // }
  // useEffect(() => {
  //   if(detail && detailId !== "") fetchDetailMovie()
  // },[detailId])
  return (
    <div className='max-w-[1640px] mx-auto'>
      <DetailNavbar />
      <DetailHero />
    </div>
  )
}

export default DetailMovie