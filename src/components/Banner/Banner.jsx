import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import movie2 from '../../assets/today.jpg'
import Trailer1 from '../../assets/video.mp4'

function Banner() {
     const [close, setClose] = useState(true)
     return (
          <div className='max-w-[1640px] mx-auto mt-3'>
               <div className='relative max-h-[400px]'>
                    <img src={movie2} alt="movie2" className='w-full max-h-[300px]' />
                    <div className='absolute top-0 flex flex-col'>
                         <div className='flex px-8 py-5 mt-3'>
                              <h2 className='text-2xl font-semibold text-white'>Latest Trailers</h2>
                              <div className='flex items-center bg-transparent border-2 
                                   border-green-300 rounded-full ml-3'>
                                   <p className='bg-[#032541] rounded-full py-0.5 px-4 text-[#c0fecf] 
                                        font-medium'>On TV</p>
                                   <p className='py-0.5 px-4 font-medium text-white'>In Threaters</p>
                              </div>
                         </div>
                         <div className='px-8 grid md:grid-cols-4 gap-6 w-full'>
                                   <video src={Trailer1} loop muted className='rounded hover:scale-100 w-[300px]'>
     
                                   </video>
                                   <video src={Trailer1} autoPlay loop muted className='rounded hover:scale-100 w-[300px]'>
     
                                   </video>
                                   <video src={Trailer1} autoPlay loop muted className='rounded hover:scale-100 w-[300px]'>
     
                                   </video>
                                   <video src={Trailer1} autoPlay loop muted className='rounded hover:scale-100 w-[300px]'>
     
                                   </video>
                              

                         </div>
                    </div>
                    {/* {close ? <div className='bg-black/70 fixed w-full h-screen z-10 top-0 left-0'>
                         <div className='flex items-center justify-center w-full h-screen'>
                              <div className='w-[650px] h-[450px] bg-black'>
                                   <div className='flex justify-between items-center px-4 py-4 font-light'>
                                        <p className='text-white text-[20px]'>
                                             Episode 8 Preview
                                        </p>
                                        <AiOutlineClose
                                             className='text-lg text-white
                                        cursor-pointer'
                                             onClick={() => setClose(!close)} />
                                   </div>
                                   <video src={Trailer1} autoPlay loop muted></video>
                              </div>
                         </div>
                    </div> : ""} */}
               </div>
          </div>
     )
}

export default Banner