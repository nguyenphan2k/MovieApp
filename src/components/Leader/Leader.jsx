import React from 'react'
import { BsDot } from 'react-icons/bs'

function Leader() {
     return (
          <div className='max-w-[1640px] mx-auto px-6 py-2'>
               <div className='flex items-center'>
                    <h2 className='text-[24px] font-semibold'>Leaderboard</h2>
                    <div className='flex flex-col'>
                         <div className='flex items-center'>
                              <BsDot className='text-[40px] text-green-500'/>
                              <p>All Time Edits</p>
                         </div>
                         <div className='flex items-center'>
                              <BsDot className='text-[40px] text-red-500'/>
                              <p>Edits This Week </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Leader