import React from 'react'
import Herosection from '../Components/Pagecomponents/Home/Herosection'
import Featuredproducts from '../Components/Pagecomponents/Home/Featuredproducts'
import ShopbyCategory from '../Components/Pagecomponents/Home/ShopbyCategory'
import Newsletter from '../Components/Pagecomponents/Home/Newsletter'
import Benefits from '../Components/Pagecomponents/Home/Benefits'
import Banner from '../Components/Pagecomponents/Home/Banner'
import Artisan from '../Components/Pagecomponents/Home/Artisan'

const Home = () => {
  return (
    <div className='bg-[#FFF8E6] flex flex-col gap-9'>
        <Herosection/>
        <Benefits/>
        <Featuredproducts/>
        <ShopbyCategory/>
        <Artisan/>
        <Banner/>
        <Newsletter/>
    </div>
  )
}

export default Home