import React from 'react'
import movie1 from '../../assets/ghost.jpg'
import DetailCast from './DetailCast'

export default function DetailHero() {
  return (
    <div className='max-w-[1640px] mx-auto px-8 py-6'>
      <div className=''>
        <h2 className='text-2xl font-semibold text-black'>Top Billed Cast</h2>
      </div>
      <div className='relative grid grid-cols-12 w-[100vw]'>
        <div className='col-span-9 py-4 flex flex-col'>
          <div className='overflow-y-hidden overflow-x-scroll space-x-4 flex flex-row'>
            <div className='h-[300px] bg-stone-200 rounded max-w-[150px] mb-3'>
              <img src={movie1} alt="movie1" className='w-[150px] 
              rounded-lg max-h-[250px] md:w-[150px] sm:w-[150px]' />
              <div className='px-3 py-3'>
                <h3 className='font-bold leading-4'>Tom Hanks</h3>
                <h4 className='font-light leading-4'>Otto Anderson</h4>
              </div>
            </div>
          </div>
          <div className='py-4'>
            <DetailCast />
          </div>
        </div>
        <div className='col-span-2'>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  )
}
