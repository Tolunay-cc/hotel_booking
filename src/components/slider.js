"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Slider = ({items}) => {
  return (
    <>
<Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }} 
      loop={true} 
      pagination={{ clickable: true }} 
    >
  {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="h-[400px] md:h-[700px] relative">
            <div className="absolute top-[30%] left-1/2 translate-x-[-50%] translate-y-[50%]  text-center text-white">
                <p className=" font-bold text-4xl">{item.sliderTitle}</p>
                <p className="text-lg font-medium">{item.sliderText}</p>
            </div>
            <Image src={item.img} quality={100} height={1080} width={1920} className="h-full w-full" />
          </div>
        </SwiperSlide>
      ))}
    
 
    </Swiper>
    
    </>
  );
};

export default Slider;
