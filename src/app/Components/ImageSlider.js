"use client"
import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ImageSlider() {

const images =[ 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg',
   'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg']

  return (    
   <div className='z-0 relative' >  
     <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      interval={2000}
      >
                <div>
                    <img className='max-h-96' src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Shreyansh/BAU/Unrexc/D70978891_INWLD_BAU_Unrec_Uber_PC_Hero_3000x1200._CB594707876_.jpg" />
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" />     
                </div>
                <div>
                    <img className='max-h-96' src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" />
                </div>
            </Carousel>
   </div>
  )
}

export default ImageSlider