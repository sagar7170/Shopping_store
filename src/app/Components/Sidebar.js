"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
function Sidebar() {
    
const {productState,product, dispatchstate}= useStateValue()
    // console.log('side',product)

  return (
    <div className={productState.slider?'flex':'hidden ease-in-out duration-1000 z-30 '}>
    <div className='h-screen absolute w-56 bg-black text-white mt-1 z-30  rounded-md ml-1 '>
       <div  className='flex flex-col  items-center'>
        <h3 className='text-xl font-bold  mt-2'>Filter's</h3>
        <button className='flex hover:bg-slate-600  rounded-md  m-2 w-52 p-2'>Electronic</button>
        <button className='flex  hover:bg-slate-600 rounded-md  m-2 w-52 p-2'>Men's clothes</button>
        <button className='flex hover:bg-slate-600  rounded-md m-2 w-52 p-2'>Men's clothes</button>
        <button className='flex hover:bg-slate-600  rounded-md m-2 w-52 p-2'>Jewelary</button>
       </div>
    </div>
      </div>
  )
}

export default Sidebar