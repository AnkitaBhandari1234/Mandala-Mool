import React from 'react'
import Herosection from '../Components/Pagecomponents/Home/Herosection'
import Featuredproducts from '../Components/Pagecomponents/Home/Featuredproducts'
import ShopbyCategory from '../Components/Pagecomponents/Home/ShopbyCategory'

const Home = () => {
  return (
    <div className=''>
        <Herosection/>
        <Featuredproducts/>
        <ShopbyCategory/>
    </div>
  )
}

export default Home