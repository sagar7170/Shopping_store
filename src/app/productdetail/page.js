"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
function Detail() {
    const {product,dispatch} = useStateValue();
    console.log("productdetail",product.productdetail)
    const { image, title, price, rating, description ,id,category}=product.productdetail
  return (
    <div className='bg-white w-[90%] sm:flex gap-x-10 m-auto p-10 relative top-10 shadow-xl'>
      
        <img className='w-72  object-contain' src={image} alt="" />
        {/* <h1 className='text-end'>{category}</h1> */}
        <div className=' gap-y-5'>
       
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='flex mt-2'>
            <h1 className='font-semibold mr-1'>{rating}</h1>
            <Rating className='mb-4' name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            </div>
            
            <h1 className='text-3xl font-semibold'>${price}</h1>
            <div className='' >
                <h1>Description:</h1>
                <h1 className='font-thin '>{description}</h1>
            </div>
        </div>
    </div>
  )
}

export default Detail