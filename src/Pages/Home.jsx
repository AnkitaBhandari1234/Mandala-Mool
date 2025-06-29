import React from 'react'
import Herosection from '../Components/Pagecomponents/Home/Herosection'
import Featuredproducts from '../Components/Pagecomponents/Home/Featuredproducts'
import ShopbyCategory from '../Components/Pagecomponents/Home/ShopbyCategory'
import Newsletter from '../Components/Pagecomponents/Home/Newsletter'

const Home = () => {
  return (
    <div className=''>
        <Herosection/>
        <Featuredproducts/>
        <ShopbyCategory/>
        <Newsletter/>
    </div>
  )
}

export default Home