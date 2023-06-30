import React from 'react'
import Sidebar from './Components/Sidebar'
import ImageSlider from './Components/ImageSlider'
import Products from './Components/Products'


function page() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
        <div className='' >
          <ImageSlider />
          <Products />
        </div>
      </div>
    </>
  )
}

export default page