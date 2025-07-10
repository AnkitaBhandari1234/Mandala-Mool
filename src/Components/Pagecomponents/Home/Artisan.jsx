import React from 'react'
import Videoplayer from '../Video/Videoplayer'
import Sarangi1 from '../../../assets/Artisan/sarangi1.png'
import Sarangi2 from '../../../assets/Artisan/sarangi2.png'


const Artisan = () => {
  
  return (
    <div className='bg-[#FFEFD5CC]'>
      <div>
        {/* font content */}
        <div className=' flex  flex-row items-center w-10/12 mx-auto'>
           <span className="w-[25%] h-[1px] col-span-1 bg-[#F4E9CA]     "></span>

        <div className='flex flex-col gap-0.5 w-full  text-center'>
       
          <h1 className='font-playfair text-[#9B4E2B] text-[38px] font-semibold tracking-[0.42px]'> Artisan of the Month: Project Sarangi</h1>
          <p className='font-poppins text-[#414141] text-[14px] font-[400] tracking-[0.16px] leading-4'>A collective led by Kiran Nepali, Project Sarangi revives the soulful tradition of handmade sarangis 
by preserving Nepal’s musical heritage through masterful craftsmanship.</p>
        </div>
         <span className="w-[25%] h-[1px] col-span-1 bg-[#F4E9CA]     "></span>
        </div>
        <div>
          <Videoplayer/>
          <div>
            <img src={Sarangi1} alt=''/>
          </div>
          <div className='relative w-72 h-72'>
            <img src={Sarangi2} alt='' />
            <span className='absolute bottom-0'>Explore the collection</span>
          </div>

          

        </div>
      </div>
    </div>
  )
}

export default Artisan