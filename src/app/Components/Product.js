"use client"
import { Rating } from '@mui/material'
import React from 'react'

function Product() {
  return (
    <div className='w-full flex justify-center'>
    <div className='w-52 p-3 bg-white relative top-2 ml-3 '>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
       <h1 className='font-bold whitespace-nowrap overflow-hidden text-ellipsis' >Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
       <h1 className='overflow-hidden text-ellipsis whitespace-nowrap'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</h1>
       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
       <h1 className='font-bold'>$ 109.95</h1>
    </div>
    
    </div>
  )
}

export default Product