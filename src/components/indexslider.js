"use client"

import React from "react";
import Slider from "./slider";
const IndexSlider = () =>{
    const img=[
        {img:'/image/hotel-booking-beach.webp',
        sliderTitle:'Yılın o vakti geldi',
        sliderText:'Tatil rutinden uzaklaşma ve yeni maceraların keşfi için mükemmel bir fırsattır'
      },
        {img:'/image/hotel-booking-pool.webp',
        sliderTitle:'Yılın o vakti geldi',
        sliderText:'Tatil rutinden uzaklaşma ve yeni maceraların keşfi için mükemmel bir fırsattır'},
        
        {img:'/image/hotel-booking-vacation.webp',
        sliderTitle:'Yılın o vakti geldi',
        sliderText:'Tatil rutinden uzaklaşma ve yeni maceraların keşfi için mükemmel bir fırsattır'}

  
    ]

  return (
    <>

 
        <Slider items={img} />
  
    

    </>
  );
};

export default IndexSlider;
