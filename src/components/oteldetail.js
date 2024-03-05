"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Oteldetail = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
        <>
          <div>
            <div className="h-[400px] relative">
              <Image
                src={items?.otelImg}
                quality={100}
                height={1080}
                width={1920}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-lg font-bold">{items?.otelName}</h1>
            </div>
            <p className=" text-justify">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut
              , imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt.{" "}
            </p>
            <ul className="list-disc px-6">
            <li>7/24 etkinlik</li>
            <li>Koy Gezileri</li>
            <li>Özel Sağlık Hizmetleri</li>
            <li>Özel ulaşım Servisi</li>
            <li>Çocuk Dostu</li>
          </ul>
          </div>
        </>

        <div className="">
     
        </div>
      </div>
    </>
  );
};

export default Oteldetail;
