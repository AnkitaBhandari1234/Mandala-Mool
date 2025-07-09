import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFF7D3CC] via-[#FAF0DD] to-[#FFF7D3CC] h-[234px] shadow-[0px_1px_8px_0px_rgba(117,117,117,0.08)] '>
        <div className='flex flex-col gap-8 items-center justify-center h-full' >
            <div className='flex flex-col items-center'>

            <h1 className='font-playfair font-[600] text-[30px] tracking-[0.32px] text-[#9B4E2B]'>Subscribe to Our Newsletter</h1>
            <span className='font-poppins text-base font-[500] text-[#414141] -tracking-wide leading-3'>“Get 10% off your first order”</span>
            </div>
            <div className='flex gap-2 h-[44px]'>
                <input type='email' id='email' placeholder='Your email address' className='w-[413px] h-[45px] rounded-[9px] border-[#D1D1D1] border placeholder:text-[#414141] font-inter font-[400] text-[14px] pl-3 outline-none  '/>
                <button type='submit' className='bg-[#A0522D] font-inter font-[400] text-base text-[#F5E1CC] rounded-[9px] px-6 shadow-[0_6px_12px_rgba(0,0,0,0.2)] 
              '>Subscribe</button>
                </div>

        </div>
    </div>
  )
}

export default Newsletter