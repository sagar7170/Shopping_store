"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider';
import CartProduct from '../Components/CartProduct';

function page() {
  const {product,dispatch} = useStateValue();
  const Array = product.cart;
  // console.log("array",Array)
  const array = [1,2,3]
  return (
    <div>
        <h1 className='text-center text-3xl font-bold text-gray-600'>Shopping Cart</h1>
        <div className='bg-white h-28 p-5 relative top-2 shadow-xl'>
          <h1 className='text-xl font-bold'> Subtotal $344.5</h1>
          <button   className='bg-yellow-400 mt-1 hover:bg-yellow-200 w-44 h-8 rounded-lg font-semibold '>Procced to Buy</button>
        </div>
        <div  >
          {
            Array?.map((item)=>(
               <CartProduct image={item.image} title={item.title} price={item.price} rating={item.rating.rate} description={item.description} id={item.id}/>
              // <CartProduct/>
            ))
          }
        </div>
    </div>
  )
}

export default page