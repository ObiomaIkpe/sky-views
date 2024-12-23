import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8'>
        <div className='md:w-1/2 w-full items-center'>
            <h1 className='md:text-5xl text-3xl font-bold md:leading-tight'>hotels with nice views near me</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio provident, tempora similique corrupti illo esse suscipit nulla ipsum perspiciatis quam.</p>
        </div>


        <div className='md:w-1/2 w-full mx-auto '>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt='perfect view' className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img1} alt='perfect view' className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img2} alt='perfect view' className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img3} alt='perfect view' className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>

        <SwiperSlide>
          <img src={img4} alt='perfect view' className='w-full lg:h-[420px] sm:h-96 h-80'/>
        </SwiperSlide>
        
      </Swiper>
        </div>
    </div>
  )
}

export default Hero