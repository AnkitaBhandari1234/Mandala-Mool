import React from 'react'
import { Link } from 'react-router-dom'


const MainNavbar = () => {
    const navlist=[
        {
            name:"Shop all",
            path:'/shop_all',

        },
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
    <div className='  shadow-xl shadow-[#e7e3e3]   '>
        <nav className='w-10/12   mx-auto py-3  '>
            <ul className='flex  items-center  justify-around'>
                {
                    navlist.map((item,index)=>{
                        return(
                            <li key={index} className=''>

                                <Link to={item.path} className='capitalize text-[16px] font-[400] text-[#414141] font-poppins hover:text-[#BA4A20] transition ease-in-out duration-300'>{item.name}</Link>
                            </li>
                        )
                    })
                }

            </ul>
        </nav>

    </div>
  )
}

export default MainNavbar