import React from 'react'
import trailer2 from '../../assets/img_1.jpg'

function Join() {
     return (
          <div className='max-w-[1640px] mx-auto mt-3 py-4'>
               <div className='max-h-[400px] relative'>
                    <img src={trailer2} alt="movie2" className='w-full max-h-[350px]' />
                    <div className='absolute top-0 px-8 py-6'>
                         <h2 className='text-[32px] mb-[12px] font-semibold text-white'>Join Today</h2>
                         <div className='flex justify-between max-w-[1600px]'>
                              <div>
                                   <p className='max-w-[800px] text-white text-[19px]'>
                                        Get access to maintain your own <span className='text-gray-400'>
                                             custom personal lists, track what you've seen
                                        </span> and search and filter for
                                        <span className='text-gray-400'> what to watch next </span>
                                        —regardless if it's in theatres, on TV or available on popular
                                        streaming services like .
                                   </p>
                                   <button className='bg-[#805BE7] py-2 px-4 text-white
                                   text-[17px] rounded mt-4 font-medium cursor-pointer'>
                                        Sign Up
                                   </button>
                              </div>
                              <div className='max-w-[700px] ml-9'>
                                   <ul className='text-white'>
                                        <li className='text-gray-300 text-[16px]'>Enjoy TMDB ad free</li>
                                        <li className='text-gray-300 text-[16px]'>Maintain a personal watchlist</li>
                                        <li className='text-gray-300 text-[16px]'>Filter by your subscribed streaming services and find something to watch</li>
                                        <li className='text-gray-300 text-[16px]'>Log the movies and TV shows you've seen</li>
                                        <li className='text-gray-300 text-[16px]'>Build custom lists</li>
                                        <li className='text-gray-300 text-[16px]'>Contribute to and improve our database</li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Join