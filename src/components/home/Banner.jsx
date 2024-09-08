"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaApple, FaArrowRightLong } from "react-icons/fa6";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Banner1 from "../../../public/assets/banner1.png"
import Banner2 from "../../../public/assets/banner2.png"
import Banner3 from "../../../public/assets/banner3.png"
import Banner4 from "../../../public/assets/banner4.png"
import Banner5 from "../../../public/assets/banner5.png"

const Banner = () => {
    return (
        <div className='min-h-[450px]'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation , Autoplay]}
                className="mySwiper text-white bg-black"
            >
                <SwiperSlide>
                    <div className='flex flex-col-reverse md:flex-row md:justify-around items-center min-h-[450px] gap-4'>
                        <div className='flex flex-col justify-center p-4'>
                            <h4 className="text-xl flex items-center gap-3"><FaApple className='md:text-4xl text-2xl' /> iphone 124 series</h4>
                            <h2 className="text-2xl md:text-5xl font-bold my-6 md:my-8">Up to 10% <br /> off Voucher</h2>
                            <div>
                                <button className='btn border-b-2 0 flex items-center gap-2'>Shop Now <FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className='p-4'>
                            <Image src={Banner1} alt='Banner Image'></Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col-reverse md:flex-row md:justify-around items-center min-h-[450px] gap-4'>
                        <div className='flex flex-col justify-center p-4'>
                            <h4 className="text-xl flex items-center gap-3"><FaApple className='md:text-4xl text-2xl' /> Vote Speaker</h4>
                            <h2 className="text-2xl md:text-5xl font-bold my-6 md:my-8">Up to 10% <br /> off Voucher</h2>
                            <div>
                                <button className='btn border-b-2 0 flex items-center gap-2'>Shop Now <FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className='p-4'>
                            <Image src={Banner2} alt='Banner Image' width={300}></Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col-reverse md:flex-row md:justify-around items-center min-h-[450px] gap-4'>
                        <div className='flex flex-col justify-center p-4'>
                            <h4 className="text-xl flex items-center gap-3"><FaApple className='md:text-4xl text-2xl' /> Camera Cannon series</h4>
                            <h2 className="text-2xl md:text-5xl font-bold my-6 md:my-8">Up to 10% <br /> off Voucher</h2>
                            <div>
                                <button className='btn border-b-2 0 flex items-center gap-2'>Shop Now <FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className='p-4'>
                            <Image src={Banner3} alt='Banner Image' width={200}></Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col-reverse md:flex-row md:justify-around items-center min-h-[450px] gap-4'>
                        <div className='flex flex-col justify-center p-4'>
                            <h4 className="text-xl flex items-center gap-3"><FaApple className='md:text-4xl text-2xl' /> small speaker series</h4>
                            <h2 className="text-2xl md:text-5xl font-bold my-6 md:my-8">Up to 10% <br /> off Voucher</h2>
                            <div>
                                <button className='btn border-b-2 0 flex items-center gap-2'>Shop Now <FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className='p-4'>
                            <Image src={Banner4} alt='Banner Image'></Image>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col-reverse md:flex-row md:justify-around items-center min-h-[450px] gap-4'>
                        <div className='flex flex-col justify-center p-4'>
                            <h4 className="text-xl flex items-center gap-3"><FaApple className='md:text-4xl text-2xl' /> perfume</h4>
                            <h2 className="text-2xl md:text-5xl font-bold my-6 md:my-8">Up to 10% <br /> off Voucher</h2>
                            <div>
                                <button className='btn border-b-2 0 flex items-center gap-2'>Shop Now <FaArrowRightLong /></button>
                            </div>
                        </div>
                        <div className='p-4'>
                            <Image src={Banner5} alt='Banner Image'></Image>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Banner;

