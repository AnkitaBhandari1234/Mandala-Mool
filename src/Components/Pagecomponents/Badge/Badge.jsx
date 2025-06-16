import React from 'react'

const Badge = ({name}) => {
  return (
    <div className='w-fit absolute bottom-0 left-0 text-white text-xs hover:border-none font-playfair font-[600]    '>
        <div className='w-[78px] bg-[#A13C3C] h-5 relative pl-1 pt-[1px]  ' >

            {name}
            <span className=' w-0 h-0   border-t-[10px] border-b-[10px]  border-l-[9px] border-t-transparent border-b-transparent  transform rotate-180 absolute top-0 bottom-0 right-0 overflow-clip border-white  '></span>
            </div>
    </div>
  )
}

export default Badge