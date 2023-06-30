import { Rating } from '@mui/material'
import React from 'react'

function CartProduct({ image, title, price, rating, description }) {
  return (
  
    <div className='flex sm:flex-row flex-col w-full  relative bg-white p-5 top-5  shadow-2xl'>
        <div className=' w-60  p-5 '>
          <img  src={image} alt="" />
        </div>
        <div className=' w-80 '>
          <h1 className='font-bold  whitespace-nowrap overflow-hidden text-ellipsis' >{title}</h1>
          <h1 className='line-clamp-2'>{description}</h1>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <h1 className='font-bold'>$ {price}</h1>
          <button   className='bg-yellow-400 mt-1 hover:bg-yellow-200 w-full h-8 rounded-lg font-semibold '>Remove</button>
        </div>
    </div>
  )
}

export default CartProduct  