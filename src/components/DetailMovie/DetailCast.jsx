import React from 'react'
import otto from '../../assets/ottojpg.jpg'
import Trailer1 from '../../assets/video.mp4'

export default function DetailCast() {
     return (
          <div className='w-full'>
               <div>
                    <h2 className='font-semibold text-[17px] pb-[30px]'>Full Cast & View</h2>
               </div>
               <div className='w-full border-t-2 border-black/20 flex flex-col py-[30px]'>
                    <div className='flex items-center'>
                         <h2 className='mr-[50px] text-[22px] font-semibold'>Social</h2>
                         <div className='flex space-x-6 items-center cursor-pointer'>
                              <p className='text-[17px] font-medium flex'>
                                   Reviews
                                   <span className='ml-1 text-gray-600'>0</span>
                              </p>
                              <div className='relative '>
                                   <p className='text-[17px] font-medium flex '>
                                        Discussions
                                        <span className='ml-1 text-gray-600'>2</span>
                                   </p>
                                   <span className='border-b-4 border-black h-2 w-full absolute'></span>
                              </div>
                         </div>
                    </div>
                    <div className='w-full bg-stone-300 py-3 px-5 flex justify-between items-center
              rounded shadow-md mt-3'>
                         <div>
                              <p className='text-base'>why even bother, original does not have even 8 years?</p>
                         </div>
                         <div className='flex items-center space-x-7'>
                              <p className='text-base'>Open</p>
                              <span className='text-base'>3</span>
                         </div>
                         <div className='flex flex-col'>
                              <p className='text-[14px]'>Mar 02,2023 at 6:40AM</p>
                              <p className='text-[14px] flex justify-end'>by Markoff</p>
                         </div>
                    </div>
                    <div className='w-full bg-stone-300 py-3 px-5 flex justify-between items-center
              rounded shadow-md mt-4'>
                         <div>
                              <p className='text-base'>why even bother, original does not have even 8 years?</p>
                         </div>
                         <div className='flex items-center space-x-7'>
                              <p className='text-base'>Open</p>
                              <span className='text-base'>3</span>
                         </div>
                         <div className='flex flex-col'>
                              <p className='text-[14px]'>Mar 02,2023 at 6:40AM</p>
                              <p className='text-[14px] flex justify-end'>by Markoff</p>
                         </div>
                    </div>
                    <p className='mt-3 text-[17px] font-semibold'>Go to Discussions</p>
               </div>
               {/**------------------------------------------------------------------ */}
               <div className='w-full border-t-2 border-black/20 flex
               pt-[30px] flex-col'>
                    <div className='flex'>
                         <h2 className='font-semibold text-[22px]'>Media</h2>
                         <ul className='flex space-x-7 ml-16'>
                              <li className='relative text-[17px] font-medium'>
                                   <p>Most Popular</p>
                                   <span className='border-b-4 border-black h-2 w-full absolute'></span>
                              </li>
                              <li className='flex text-[17px] font-medium'>
                                   <p>Videos</p>
                                   <span className='ml-1 text-gray-600'>1</span>
                              </li>
                              <li className='flex text-[17px] font-medium'>
                                   <p>Backdrops</p>
                                   <span className='ml-1 text-gray-600'>28</span>
                              </li>
                              <li className='flex text-[17px] font-medium'>
                                   <p>Posters</p>
                                   <span className='ml-1 text-gray-600'>62</span>
                              </li>
                         </ul>
                    </div>
                    <div className='flex'>
                         <video src={Trailer1} className='w-[100px]'></video>
                         <img src={otto} alt="otto" className='w-[100px]'/>
                    </div>
               </div>
          </div>
     )
}
