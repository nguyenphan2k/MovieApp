import React from 'react'
import DetailNavbar from './DetailNavbar'
import DetailHero from './DetailHero'
// import {useSelector} from 'react-redux'


function DetailMovie() {
  // const lists = useSelector((state) => state)
  return (
    <div className='max-w-[1640px] mx-auto'>
         <DetailNavbar />
         <DetailHero />
    </div>
  )
}

export default DetailMovie