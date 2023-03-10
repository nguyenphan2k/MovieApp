import React, { useState, useRef, useLayoutEffect  } from 'react'

function PopularSwitch({ Thumb }) {
     const [isToggle, setIsToggle] = useState(false)
     const [item1Width, setItem1Width] = useState()
     const [item2Width, setItem2Width] = useState()
     const item1Ref = useRef()
     const item2Ref = useRef()
     const activeText = "bg-clip-text text-transparent bg-gradient-to-r from-tmdbLightGreen to-tmdbLightBlue"
     const handleToggle = () => {
          setIsToggle(!isToggle)
     }
     useLayoutEffect(() => {
          setItem1Width(item1Ref.current.offsetWidth)
          setItem2Width(item2Ref.current.offsetWidth)
     },[])
     return (
          <div className='hover:cursor-pointer flex items-center h-8 border-solid border-tmdbDarkBlue
    rounded-[30px] border-[1px] font-semibold relative z-[1]'>
               <div onClick={handleToggle} ref={item1Ref}
                    className={`px-5 py-1 rounded-[30px] h-8 ${isToggle || activeText}`}>{Thumb[0]}</div>
               <div onClick={handleToggle} ref={item2Ref}
                    className={`px-5 py-1 rounded-[30px] h-8 ${isToggle && activeText}`}>{Thumb[1]}</div>
               <div className='h-8 w-20 bg-tmdbDarkBlue rounded-[30px] absolute z-[-1] transition-all
               duration-150 ease-in' style={
                         isToggle ?
                              {
                                   left: `${item1Width}px`,
                                   width: `${item2Width+2}px`,
                              } : {
                                   left: "0",
                                   width: `${item1Width}px`,
                              }
                    }></div>
          </div>
     )
}

export default PopularSwitch