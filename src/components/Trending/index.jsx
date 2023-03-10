import React, { useState} from 'react'

function Index({ items, onToggle, isToggled }) {
     const [isToggle, setIsToggle] = useState(false)
     
     const handleToggle = (selectedItem) => {
          onToggle(selectedItem)
     }
     const activeText = "bg-clip-text text-transparent bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue"

     console.log(isToggled);
     return (
          <div className='hover:cursor-pointer flex items-center h-8 border-solid border-tmdbDarkBlue
    rounded-[30px] border-[1px] font-semibold relative z-[1]'>
               <div onClick={handleToggle.bind(null, items[0])}
                    className={`px-5 py-1 rounded-[30px] h-8 ${isToggle || activeText}`}>{items[0]}</div>
               <div onClick={handleToggle.bind(items[1])}
                    className={`px-5 py-1 rounded-[30px] h-8 ${isToggle && activeText}`}>{items[1]}</div>
               <div className='h-8 w-20 bg-tmdbDarkBlue rounded-[30px] absolute z-[-1] transition-all
               duration-150 ease-in' style={
                    isToggle?
                    {
                         left:'80px',
                         width: '120px' ,
                    }:{
                         width:'80px',
                         left:'0',
                    }
               }></div>
          </div>
     )
}

export default Index