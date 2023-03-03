import React from 'react'
import movie1 from '../../assets/ghost.jpg'

export default function DetailHero() {
  return (
    <div className='max-w-[1640px] mx-auto px-8 py-6'>
      <div className=''>
        <h2 className='text-2xl font-semibold text-black'>Top Billed Cast</h2>
      </div>
      <div className='relative grid grid-cols-12'>
        <div className='col-span-10'>
          <img src={movie1} alt="movie1" className='w-[150px] rounded-lg' />
        </div>
        <div className='col-span-2'>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  )
}
