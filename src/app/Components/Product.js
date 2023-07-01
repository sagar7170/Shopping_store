"use client"
import { Rating } from '@mui/material'
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import toast, { Toaster } from 'react-hot-toast';

function Product({ image, title, price, rating, description ,id}) {
  
  const {product,dispatch} = useStateValue();
  const Array= product.cart;
  // console.log("cart",Array)
  const Cart=()=>{
    toast.success('Added to Cart');
    dispatch({
      type: 'ADD_TO_CART',
      payload:{
        image:image, title:title, price:price, rating:rating, description:description,id:id
      }
    })
  }
  return (
    <div className='w-full flex justify-center h-full relative'>
      <div className='w-44 p-3 sm:w-64 sm:p-5 flex justify-between flex-col bg-white relative top-2  '> 
         <img className='w-60 h-60 object-contain ' src={image} alt="" />
        <div>
          <h1 className='font-bold  whitespace-nowrap overflow-hidden text-ellipsis' >{title}</h1>
          <h1 className='line-clamp-2'>{description}</h1>
          <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
          <h1 className='font-bold'>$ {price}</h1>
          <button  onClick={Cart} className='bg-yellow-400 mt-1 hover:bg-yellow-200 w-full h-8 rounded-lg font-semibold'>Add to Cart</button>
          <Toaster/>
        </div>
      </div>

    </div>
  )
}



export default Product