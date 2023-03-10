import React from 'react'
import HeaderList from './HeaderList'
import {headerLeft, headerRight} from '../Header/HeaderItem'

function Header() {
     return (
          <nav className='max-w-[1400px] h-16 bg-tmdbDarkBlue flex items-center justify-between
          text-white font-semibold px-5 mx-auto cursor-pointer sm:text-sm lg:text-lg'>
               <HeaderList items={headerLeft}/>
               <HeaderList items={headerRight}/>
          </nav>
     )
}

export default Header