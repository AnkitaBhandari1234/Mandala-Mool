import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-[#FAF0DD] h-[234px]'>
        <div className='flex flex-col gap-5 items-center justify-center h-full' >
            <div className='flex flex-col items-center'>

            <h1 className='font-playfair font-[600] text-[32px] tracking-[0.32px] text-[#9B4E2B]'>Subscribe to Our Newsletter</h1>
            <span className='font-poppins text-base font-[500] text-[#414141] -tracking-wide leading-6'>“Get 10% off your first order”</span>
            </div>
            <div className='flex gap-2 h-[45px]'>
                <input type='email' id='email' placeholder='Your email address' className='w-[413px] h-[45px] rounded-lg border-[#D1D1D1] border placeholder:text-[#414141] font-inter font-[400] text-base pl-3 outline-none  '/>
                <button type='submit' className='bg-[#A0522D] font-inter font-[400] text-base text-[#F5E1CC] rounded-lg px-6'>Subscribe</button>
                </div>

        </div>
    </div>
  )
}

export default Newsletter