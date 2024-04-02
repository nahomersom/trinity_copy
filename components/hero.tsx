'use client';
import Image from "next/image";
import Logo from "./ui/logo";
import facebookIcon from "@/public/images/facebook_icon.svg";
import instaIcon from "@/public/images/instagram_icon.svg";

// export default function Hero() {
//   return (
//     <section className="relative h-[660px] max-h-full">
//       {/* Illustration behind hero content */}
//       <div
//         className="absolute left-1/2 transform w-1/1 h-1/1 -translate-x-1/2 bottom-0 top-20 -z-1 overflow-hidden
//         bg-[#002937] opacity-20
//          pointer-events-none bg-cover bg-no-repeat  bg-center"
//         aria-hidden="true"        
//         style={{backgroundImage:"url('images/home_bg.svg')"}}
//       >
//       </div>

     
//         <div className="relative w-1/1 h-1/1 pt-32  md:pt-40 flex flex-col justify-center items-center">
//           <div className="text-center pb-12 md:pb-16">
//             <Logo size="big" />
//           </div>
          
//       </div>
//     </section>
//   );
// }
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore  from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; // Ensure you import the Swiper bundle CSS file
import {  Navigation, Autoplay } from 'swiper/modules';
SwiperCore.use([Navigation]);

SwiperCore.use([Autoplay]);

export default function Hero() {
  return (
    <section className="relative h-[660px] max-h-full">
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{ delay: 5000 }} // Autoplay with a delay of 5000 milliseconds (5 seconds)
      navigation={false} // Hide navigation arrows
      className="h-full"
      loop={true}
    >
      <SwiperSlide>
            <div
       className="absolute left-1/2 transform w-1/1 h-1/1 -translate-x-1/2 bottom-0 top-20 -z-1 overflow-hidden
         bg-[#002937] opacity-20
          pointer-events-none bg-cover bg-no-repeat  bg-center"
         aria-hidden="true"        
         style={{backgroundImage:"url('images/home_bg.svg')"}}
       >
       </div>

     
         <div className="relative w-1/1 h-1/1 pt-32  md:pt-40 flex flex-col justify-center items-center">
           <div className="text-center pb-12 md:pb-16">
             <Logo size="big" />
           </div>
          
       </div>
      </SwiperSlide>
      <SwiperSlide>
            <div
       className="absolute left-1/2 transform w-1/1 h-1/1 -translate-x-1/2 bottom-0 top-20 -z-1 overflow-hidden
         bg-[#002937] opacity-20
          pointer-events-none bg-cover bg-no-repeat  bg-center"
         aria-hidden="true"        
         style={{backgroundImage:"url('images/partners_pic.svg')"}}
       >
       </div>

     
         <div className="relative w-1/1 h-1/1 pt-32  md:pt-40 flex flex-col justify-center items-center">
           <div className="text-center pb-12 md:pb-16">
             <Logo size="big" />
           </div>
          
       </div>
      </SwiperSlide>
      <SwiperSlide>
            <div
       className="absolute left-1/2 transform w-1/1 h-1/1 -translate-x-1/2 bottom-0 top-20 -z-1 overflow-hidden
         bg-[#002937] opacity-20
          pointer-events-none bg-cover bg-no-repeat  bg-center"
         aria-hidden="true"        
         style={{backgroundImage:"url('images/staff1.svg')"}}
       >
       </div>

     
         <div className="relative w-1/1 h-1/1 pt-32  md:pt-40 flex flex-col justify-center items-center">
           <div className="text-center pb-12 md:pb-16">
             <Logo size="big" />
           </div>
          
       </div>
      </SwiperSlide>
    </Swiper>
    </section>
  );
}