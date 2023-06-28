import React from 'react'
import Sidebar from './Components/Sidebar'
import ImageSlider from './Components/ImageSlider'
import Product from './Components/Product'


function page() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div>
          <ImageSlider />
          <Product />
        </div>
      </div>
    </>
  )
}

export default page