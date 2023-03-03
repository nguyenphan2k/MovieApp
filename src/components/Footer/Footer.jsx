import React from 'react'
import img2 from '../../assets/footer.svg'

function Footer() {
  return (
    <div className='max-w-[1640px] mx-auto bg-[#032541]
    bottom-0 relative right-0 text-white'>
      <div className=''>
        <div className='flex items-center justify-center py-[80px]'>
            <div className='mr-10 -mt-6 flex flex-col'>
              <div className='flex self-end'>
                <img 
                src={img2} 
                alt="img2" 
                className='w-[130px] mb-5'
                />
              </div>
              <div className=''>
                <button className='text-[#01B4E4] text-[18px] px-4 py-2
                bg-white rounded-[5px] mt-5 cursor-pointer font-bold'>JOIN THE COMMUNITY</button>
              </div>
            </div>
            <div className='flex space-x-10'>
              <div className=''>
                <ul>
                  <h3 className='text-[20px] font-bold'>THE BASICS</h3>
                  <li className='text-[17px] font-normal'>About TMDB</li>
                  <li className='text-[17px] font-normal'>Contact Us</li>
                  <li className='text-[17px] font-normal'>API</li>
                  <li className='text-[17px] font-normal'>System Status</li>
                  <li className='text-[17px] font-normal'>Support Forums</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3 className='text-[20px] font-bold'>GET INVOLVED</h3>
                  <li className='text-[17px] font-normal'>About TMDB</li>
                  <li className='text-[17px] font-normal'>Contact Us</li>
                  <li className='text-[17px] font-normal'>API</li>
                  <li className='text-[17px] font-normal'>System Status</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3 className='text-[20px] font-bold'>COMMUNITY</h3>
                  <li className='text-[17px] font-normal'>About TMDB</li>
                  <li className='text-[17px] font-normal'>Contact Us</li>
                  <li className='text-[17px] font-normal'>API</li>
                  <li className='text-[17px] font-normal'>System Status</li>
                </ul>
              </div>
              <div>
                <ul>
                  <h3 className='text-[20px] font-bold'>LEGAL</h3>
                  <li className='text-[17px] font-normal'>About TMDB</li>
                  <li className='text-[17px] font-normal'>Contact Us</li>
                  <li className='text-[17px] font-normal'>API</li>
                  <li className='text-[17px] font-normal'>System Status</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer