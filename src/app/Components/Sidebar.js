"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import { dialogClasses } from '@mui/material';
function Sidebar() {
    
    const [sidebar,dispatch]= useStateValue();
    console.log('side',sidebar)
    
  return (
    <div className={sidebar.slider?'-translate-x-0':'-translate-x-full ease-in-out duration-1000'}>
    <div className='h-screen w-56 bg-black text-white mt-1  rounded-md ml-1'>
       <div  className='flex flex-col  items-center'>
        <h3 className='text-xl font-bold  mt-2'>Filter's</h3>
        <button className='flex hover:bg-slate-600  rounded-md  m-2 w-52 p-2'>Electronic</button>
        <button className='flex  hover:bg-slate-600 rounded-md  m-2 w-52 p-2'>Men's clothes</button>
        <button className='flex hover:bg-slate-600  rounded-md m-2 w-52 p-2'>Men's clothes</button>
        <button className='flex hover:bg-slate-600  rounded-md m-2 w-52 p-2'>Electronic</button>
       </div>
    </div>
    </div>
  )
}

export default Sidebar