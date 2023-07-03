"use client"
import React from 'react'
import { useStateValue } from '../Context/StateProvider'
function Sidebar() {
    
const {productState, dispatchstate}= useStateValue()
     console.log("filter",productState.filter)
    const filter = (e)=>{
       dispatchstate({
        type:'FILTER_CATEGORY',
        payload:e.target.name
       })
       dispatchstate({
        type: 'SHOW_SLIDER',
      })
    }
const clearfilter = ()=>{
  dispatchstate({
    type:'CLEAR_FILTER',
    payload:""
   })
   dispatchstate({
    type: 'SHOW_SLIDER',
  })
}    
return (
    <div className={productState.slider?'flex':'hidden z-30 '}>
    <div className='h-screen absolute w-64 sm:w-72 bg-black text-white z-30 '>
       <div  className='flex flex-col  items-center'>
        <h3 className='text-xl font-bold mt-2'>Filter's</h3>
        <button onClick={filter} name="electronics" className='flex hover:bg-slate-600  rounded-md   w-60 p-2'>Electronic</button>
        <button onClick={filter} name="men's clothing" className='flex  hover:bg-slate-600 rounded-md   w-60 p-2'>Men's clothes</button>
        <button onClick={filter} name="women's clothing" className='flex hover:bg-slate-600  rounded-md  w-60 p-2'>Women's clothes</button>
        <button onClick={filter} name="jewelery" className='flex hover:bg-slate-600  rounded-md  w-60 p-2'>Jewelary</button>
        <button onClick={clearfilter} className='bg-green-600 hover:bg-green-400 mt-10 text-lg font-semibold w-60 h-10 rounded-sm'>Clear Filter</button>
       </div>
    </div>
      </div>
  )
}
export default Sidebar