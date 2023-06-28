"use client"

import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateValue } from '../Context/StateProvider';

function Header() {

    const [sidebar,dispatch]= useStateValue()
 

  const showSlider = ()=>{
  
    dispatch({
      type:'SHOW_SLIDER',
      // payload: icon  
    })
  }

  return (
   <div className='bg-black '>
    <div className='bg-black w-full h-14 flex items-center justify-between rounded-md'>
       <div onClick={showSlider} className='hover:bg-slate-800'>
       <MenuIcon className='' sx={{ color: 'white' }} fontSize="large"/>
       </div>
        <h1 className='text-yellow-500  ml-2  font-bold text-xl  sm:flex hidden'>ShopPing</h1>
        <div className='flex items-center p-1 text-white ml-4 w-full  sm:visible invisible'>
          <input className='p-1 rounded-sm w-full' type="text"/>
          <SearchIcon fontSize='large'/>
        </div>
        <div className=''>
        <Badge badgeContent={6} color="success" sx={{margin:2}}>
        <ShoppingCartIcon sx={{ color: 'white' }} fontSize="large"/>
        </Badge>
      </div>
    </div>
    <div className='flex items-center p-1 pt-0 sm:hidden w-full'>
          <input className='p-1 rounded-sm w-full' type="text"/>
          <SearchIcon fontSize='large' sx={{ color: 'white' }}/>
        </div>
   </div>
      )
}

export default Header
