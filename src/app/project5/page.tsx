'use client'
import React from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import Navbar from '../navbar/page';
import Footer from '../footer/page';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Project2() {
  return (
    <main className='container-page block relative  xl:max-w-[1280px] xl:m-28 xl:p-10 lg:max-w-[1024px] lg:m-20 bg-whh lg:p-10 40 70 60 rounded-[40px] md:max-w-f md:m-10 md:p-10 sm:max-w-full sm:bg-whh sm:m-0 sm:p-0'>
        <Navbar/>
        {/* heading */}
        <div className="flex flex-col lg:flex-row justify-between items-center bg-whh border-t-2 border-b-2 border-[#e6e4e4] p-6 md:p-10 lg:p-14 h-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-0">Portfolio Project</h1>
            <span className="text-sm text-center text-secondary">
                <Link href='/portfolio'>
                    <RxCross2 size={35} className='border-2 transition-all hover:bg-primary hover:text-white'/>
                </Link>
            </span>
        </div>
        {/* content */}
        <div className='flex flex-col lg:flex-row-reverse gap-6 mt-12 lg:mt-24 mb-16 lg:mb-28 xl:justify-center'>
            {/* Description section */}
            <div className='border-2 rounded-2xl bg-white p-6 w-full lg:w-72 h-auto lg:h-[400px]'>
                <h1 className='text-xl font-bold'>Description</h1>
                <div className='flex items-center gap-1 mt-3'>
                    <IoPersonSharp size={20} className='text-primary'/> 
                    <h1 className='text-sm text-secondary mt-1'>Affan Hussain</h1>
                </div>
                <div className='flex items-center gap-1 mt-3'>
                    <TbWorld size={20} className='text-primary'/> 
                    <h1 className='text-sm text-secondary'>Affan Hussain</h1>
                </div>
                
                <p className='mt-3 text-sm text-secondary lg:hidden xl:block'>
                An eco-conscious fashion store featuring organic clothing, combining sustainable style with a seamless shopping experience and ethically sourced materials.                </p>
                <div className='mt-6'> 
                    <h1 className='text-md font-bold'>Technology</h1>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <span className='border-2 bg-whh p-1 text-xs'>Html5</span>
                        <span className='border-2 bg-whh p-1 text-xs'>Css3</span>
                        <span className='border-2 bg-whh p-1 text-xs'>Bootstrap</span>
                        <span className='border-2 bg-whh p-1 text-xs'>Javascript</span>
                    </div>
                </div>
            </div>
            {/* Swiper section */}
            <div className='w-full lg:w-[700px] h-auto '>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src='p1.png' className='w-full h-auto lg:h-[400px]' alt="Project Image 1"/></SwiperSlide>
                    <SwiperSlide><img src='p2.png' className='w-full h-auto lg:h-[400px]' alt="Project Image 1"/></SwiperSlide>
                    
                
                </Swiper>
            </div>
        </div>
        <Footer/>
    </main>
  );
}

export default Project2;
