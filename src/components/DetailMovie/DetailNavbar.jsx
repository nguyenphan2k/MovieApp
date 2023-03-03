import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import otto from '../../assets/ottojpg.jpg'
import { BiMenu } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import {useSelector} from 'react-redux'

export default function DetailNavbar() {
     // const lists = useSelector((state) => state.allLists.lists)
     // const {id, title} = lists[0]
     // console.log("Click" , lists);
     return (
          <div className='max-w-[1640] mx-auto'>
               <div className=''>
                    <ul className='flex items-center justify-center space-x-6 py-3 '>
                         <li className='flex items-center relative'>
                              <p>Overview</p>
                              <span className='absolute border-b-4 border-green-600 
                              bottom-0 w-20'></span>
                              <IoMdArrowDropdown />
                         </li>
                         <li className='flex items-center'>
                              <p>Media</p>
                              <IoMdArrowDropdown />
                         </li>
                         <li className='flex items-center'>
                              <p>Fandom</p>
                              <IoMdArrowDropdown />
                         </li>
                         <li className='flex items-center'>
                              <p>Share</p>
                              <IoMdArrowDropdown />
                         </li>
                    </ul>
                    <div className='max-h-[900px] relative bg-gradient-to-r 
                    from-slate-300 to bg-blue-300 w-full py-[30px] flex px-[40px] '>
                         <img src={otto} alt="otto" className='w-[300px]' />
                         <div className='pl-[40px] mt-[24px]'>
                              <p className='text-[35px] font-bold'>
                                   Otto Bác Hàng Xóm Khó Ở <span className='font-light'></span>
                              </p>
                              <ul className='flex items-center mt-[7px]'>
                                   <li className='border-2 border-solid 
                                   text-[12px] px-0.5 py-0.2 border-black '>PG-13</li>
                                   <li className='pl-[20px]'>12/30/2022 (US)</li>
                                   <li className='pl-[20px]'>Phim Hài, Phim Chính Kịch</li>
                                   <li className='pl-[20px]'>2h 6m</li>
                              </ul>
                              <ul className='flex mt-[20px] w-[full] h-[68px] items-center justify-start'>
                                   <li className='w-[68px] h-[68px] rounded-full bg-[#081c22]
                                   transition .2s flex items-center justify-center hover:scale-110'>
                                        <p className='bg-transparent text-white
                                        flex items-center justify-center font-semibold
                                        '>
                                             75%
                                        </p>
                                   </li>
                                   <li className='flex flex-col text-black font-medium ml-[6px]'>
                                        User
                                        <span>Score</span>
                                   </li>
                                   <li className='h-[46px] w-[46px] rounded-full bg-[#081c22]
                                   inline-flex items-center justify-center mx-[20px]'>
                                        <BiMenu className='text-white text-[16px]' />
                                   </li>
                                   <li className='h-[46px] w-[46px] rounded-full bg-[#081c22]
                                   inline-flex items-center justify-center mx-[20px]'>
                                        <AiFillHeart className='text-white text-[16px]' />
                                   </li>
                                   <li className='h-[46px] w-[46px] rounded-full bg-[#081c22]
                                   inline-flex items-center justify-center mx-[20px]'>
                                        <FiShare className='text-white text-[16px]' />
                                   </li>
                                   <li className='h-[46px] w-[46px] rounded-full bg-[#081c22]
                                   inline-flex items-center justify-center mx-[20px]'>
                                        <AiFillStar className='text-white text-[16px]' />
                                   </li>
                              </ul>
                              <div className='mt-[24px]'>
                                   <h3 className='text-black font-normal text-[17px]'>
                                        Bác khó chịu nhưng ai hiểu thì yêu
                                   </h3>
                                   <h3 className='font-bold text-[20px] my-2'>
                                        Overview
                                   </h3>
                                   <p className='text-[16px]'>
                                        When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to an unlikely friendship that turns his world upside down.
                                   </p>
                              </div>
                              <ul className='flex wrap justify-between max-w-[600px] mt-[20px]'>
                                   <li className='flex flex-col pr-[20px] font-bold text-[16px]'>
                                        Marc Forster
                                        <span className='text-[14px] font-light'>Director</span>
                                   </li>
                                   <li className='flex flex-col pr-[20px] font-bold text-[16px]'>
                                        Fredrik Backman
                                        <span className='text-[14px] font-light'>Novel</span>
                                   </li>
                                   <li className='flex flex-col pr-[20px] font-bold text-[16px]'>
                                        David Magee
                                        <span className='text-[14px] font-light'>Screenplay</span>
                                   </li>
                              </ul>
                         </div>

                    </div>
               </div>
          </div>
     )
}
