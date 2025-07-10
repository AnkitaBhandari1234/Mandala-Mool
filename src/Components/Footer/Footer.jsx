import React from 'react'
import Badge from '../Pagecomponents/Badge/Badge'
import { Link } from 'react-router-dom'
import Facebook from '../../assets/facebooklogo.png';
import Instagram from '../../assets/instagramlogo.png';
import Twitter from '../../assets/twitterlogo.png';
import CopyrightImage from '../../assets/copyrightimage.png';




const Footer = () => {
  const quicklinks=[
    {
      name:'Shop by Category',
    },
    {
      name:'All Products',
    },
    {
      name:'Best Sellers',
    },
    {
      name:'New Arrivals',
    },
  ]

  const categories=[
     
        {
            name:"Decor",
            path:'/decor',

        },
        {
            name:"Textiles",
            path:'/textiles',

        },
        {
            name:"Jewelry",
            path:'/jewelry',

        },
        {
            name:"Ceramics",
            path:'/ceramics',

        },
        {
            name:"Artifacts",
            path:'/artifacts',

        },
        {
            name:"Wellness",
            path:'/wellness',

        },
  ]
  return (
    <div className='bg-[#3B1F16] '>

      <div className='  flex  justify-between w-[1000px] h-[300px] pt-12   '>
        {/* for logo */}
        <div className='  w-[380px] pl-20  '>
          <h1  className='font-inter font-bold text-5xl text-white  mb-5'>Logo</h1>
          <p className='font-poppins font-[400] text-sm tracking-normal text-[#FAF0E6]'>A Celebration of Nepal’s Timeless Craft.
Each Piece Handpicked, Each Detail Honored.</p>
        </div>
        {/* for quick links */}
        <div className='flex flex-col gap-2'>
          <h2 className='font-poppins font-medium text-lg text-[#FAF0E6] '>Quick Links</h2>
          <ul className='flex flex-col gap-1'>
            {
              quicklinks.map((item,index)=>(
                <Link key={index}>
                <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>{item.name}</li>
                </Link>
              ))
            }
          </ul>
        </div>
        {/* for categories */}
        <div className='flex flex-col gap-2'>
          <h2 className=' font-poppins font-medium text-lg text-[#FAF0E6]'>Categories </h2>
            <ul className='flex flex-col gap-1'>
              {
                categories.map((item,index)=>(
                  <Link key={index} to={item.path} >
                  <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>
                    {item.name}
                    </li>
                    </Link>
                ))
              }
            </ul>
         
        </div>
        {/* for support */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-poppins font-medium text-lg text-[#FAF0E6]'>Support</h1>
          <ul className='flex flex-col gap-1'>
            <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>FAQs</li>
            <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>Shipping & Returns</li>
            <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>Contact Us</li>
            <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>Terms & Conditions</li>
            <li className='font-poppins font-[400] text-sm text-[#F5F5F5] tracking-wide'>Privacy Policy</li>
          </ul>
        </div>
      </div>
      {/* for copyright and icons */}
      <div className='bg-[#2E140B] flex justify-between  py-2.5 px-20 '>
        {/* for copyright */}
        <div className='flex gap-0.5 items-center font-poppins font-[400] text-sm text-[#FAF0E6] '>
           
            Copyright
            <img src={CopyrightImage} alt='' className='w-2 h-2'/>
            <span className='font-poppins font-[400] text-sm text-[#FAF0E6]'>2025 MANDALA MOOL. All rights reserved.</span>
          


        </div>
        {/* for icons */}
        <div className='flex gap-6 items-center pr-24'>
          <span className='font-poppins font-[400] text-sm tracking-wide text-[#FAF0E6]'>FOLLOW US</span>
          <div className='w-[21px] flex gap-4'>

          <img src={Facebook} alt='social media image'/>
          <img src={Instagram} alt='social media image'/>
          <img src={Twitter} alt='social media image'/>
          </div>
         
          
       




        </div>
        
      

      </div>
      </div>

  )
}

export default Footer