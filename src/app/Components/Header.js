"use client"

import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateValue } from '../Context/StateProvider';
import Link from 'next/link';

function Header() {

  const { productState, dispatchstate,product,dispatch } = useStateValue()
  const Array= product.cart;
 const cartlength = Array?.length;
  
  const showSlider = () => {
    
    dispatchstate({
      type: 'SHOW_SLIDER',
    })
  }

  return (
    <div className='bg-black '>
      <div className='bg-black w-full h-14 flex items-center justify-between rounded-md'>
        <div onClick={showSlider} className='hover:bg-slate-800'>
          <MenuIcon className='' sx={{ color: 'white' }} fontSize="large" />
        </div>
        <Link href='/'><h1 className='text-yellow-500  ml-2  font-bold text-xl'>ShopPing</h1></Link>
        <div className='flex items-center p-1 text-white ml-4 w-full  sm:visible invisible'>
          <input className='p-1 rounded-sm w-full' type="text" />
          <SearchIcon fontSize='large' />
        </div>
        <Link href="/cart">
        <div className=''>
          <Badge badgeContent={cartlength} color="success" sx={{ margin: 2 }}>
            <ShoppingCartIcon sx={{ color: 'white' }} fontSize="large" />
          </Badge>
        </div>
        </Link>
      </div>
      <div className='flex items-center p-1 pt-0 sm:hidden w-full'>
        <input className='p-1 rounded-sm w-full' type="text" />
        
          <SearchIcon fontSize='large' sx={{ color: 'white' }} />
        
      </div>
    </div>
  )
}

export default Header
