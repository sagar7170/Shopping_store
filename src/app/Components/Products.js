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
    <div className=' sm:flex sm:flex-wrap sm:w-full justify-center'>
      {Array?.map(item=>(
       <div key={item.id} className=' sm:mr-4 mb-4' >
         <Product image={item.image} title={item.title} price={item.price} rating={item.rating.rate} description={item.description} id={item.id} category={item.category}/>
       </div>
      ))}
    </div>
  )
}

export default Products