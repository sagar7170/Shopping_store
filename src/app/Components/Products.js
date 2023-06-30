"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import Product from './Product';

function Products() {
    const {product,dispatch} = useStateValue()
    const [Array]=product.products
    // console.log("allproducts",Array);
    const array =[1,2,34,5]
  return (
    <div className=' grid grid-cols-2 sm:flex sm:flex-wrap sm:w-full justify-center'>
      {Array?.map(item=>(
       <div key={item.id} className='mr-2 mb-2' >
         <Product image={item.image} title={item.title} price={item.price} rating={item.rating.rate} description={item.description} id={item.id}/>
       </div>
      ))}
    </div>
  )
}

export default Products