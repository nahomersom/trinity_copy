'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swiper-styles.css';
import first from "@/public/images/donation-slider/1.png";
import second from "@/public/images/donation-slider/2.png";
import third from "@/public/images/donation-slider/3.png";
import fourth from "@/public/images/donation-slider/4.png";
import fifth from "@/public/images/donation-slider/5.png";



// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function  Donate(){
 
    

  
    return (
      <section className="pt-20 md:pt-20  ">
        <div className="bg-white pl-[8%]  pb-20 ">
          <div className="m-auto flex flex-col items-center w-[80%] pt-14 ">
           <h1 className="text-[#002937] font-extrabold text-[35px]">Fundraising / Capital Campaign</h1>
          <p className="text-black px-8 py-4">Trinity Fellowship Church, located in Addis Ababa, Ethiopia, was established in 2020 and has experienced remarkable growth over the past three years. In light of this growth and the opportunity to make a greater impact on the surrounding community, country, and region, we are embarking on a significant capital campaign. Our aim is to raise $5 million to acquire land and construct a facility that will greatly enhance our ability to share the Gospel throughout Ethiopia and East Africa.</p>
  <p className="text-black px-8 ">
By having our own dedicated facility, we will be able to expand and enhance the ministries of Trinity Fellowship. Currently, our church offers a wide range of outreach programs, Sunday services, and Wednesday Amharic teaching services covering various topics related to the Bible and Christian life. Additionally, we have a thriving children's ministry, a Gospel-centered Amharic worship music ministry, small groups, and other impactful ministries. As an integral part of Trinity Fellowship Church, the Pastors College is committed to equipping the next generation of Ethiopian pastors to build their lives, families, and churches on the foundation of the Gospel of Jesus Christ.</p>
<a
 target="_blank"
 rel="noopener noreferrer"
  href="https://www.globaloutreach.org/giving/project-details/trinity-fellowship-church-capital-campaign"
  className="block p-2 px-4 mt-3 text-3xl bg-[#002937] font-raleway font-black leading-9 hover:bg-[#004050] focus:bg-[#004050] focus:outline-none cursor-pointer text-white text-center"
>
  Donate Now!!
</a>
   <div className="mt-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={2}
      >
        <SwiperSlide>
        <Image src={third} alt="Third Image" />
        </SwiperSlide>
        <SwiperSlide>
        <Image src={second} alt="Second Image" />

        </SwiperSlide>
        <SwiperSlide>
        <Image src={first} alt="First Image" />
        

        </SwiperSlide>
        <SwiperSlide>
        <Image src={fourth} alt="Fourth Image" />

        </SwiperSlide>
        <SwiperSlide>
        <Image src={fifth} alt="Fifth Image" />

        </SwiperSlide>
      
      </Swiper>
    </div>
            
          </div>{" "}
        </div>{" "}
      </section>
    );
}