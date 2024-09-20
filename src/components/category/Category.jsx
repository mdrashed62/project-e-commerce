"use client"

import React from 'react';
import SectionHeading from '../shared/SectionHeading';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { CiMobile4 } from "react-icons/ci";
import { TbDeviceWatchStats } from "react-icons/tb";
import { IoCameraOutline } from "react-icons/io5";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";
import { useRouter } from 'next/navigation';
const Category = () => {

    const router = useRouter();

    const handleCategoryClick = (category) => {
        router.push(`/products?category=${category}`);
    };


    return (
        <div className='flex flex-col justify-center'>
            <div className='flex justify-between items-center'>
                <SectionHeading heading={'Browse By Category'} subHeading={'Categories'}></SectionHeading>
                <div className='flex items-center gap-2'>
                    <button className='bg-[#f5f2f2] rounded-full w-12 h-12'>
                        <IoArrowBack className='text-2xl mx-auto' />
                    </button>
                    <button className='bg-[#f5f2f2] rounded-full w-12 h-12'>
                        <IoArrowForward className='text-2xl mx-auto' />
                    </button>
                </div>
            </div>
            <div className='py-6 md:py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8'>
                <div className='h-36 ' onClick={() => handleCategoryClick('phone')}>
                    <div className='border rounded flex flex-col items-center py-6 hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out cursor-pointer'>
                        <CiMobile4 className='text-[56px]' />
                        <p>Phones</p>
                    </div>
                </div>
                <div className='h-36 ' onClick={() => handleCategoryClick('laptop')}>
                    <div className='border rounded flex flex-col items-center py-6 hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out cursor-pointer'>
                        <HiOutlineComputerDesktop className='text-[56px]' />
                        <p>Computer</p>
                    </div>
                </div>
                <div className='h-36 ' onClick={() => handleCategoryClick('smart-watch')}>
                    <div className='border rounded flex flex-col items-center py-6 hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out cursor-pointer'>
                        <TbDeviceWatchStats className='text-[56px]' />
                        <p>SmartWatch</p>
                    </div>
                </div>
                <div className='h-36 ' onClick={() => handleCategoryClick('camera')}>
                    <div className='border rounded flex flex-col items-center py-6 hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out cursor-pointer'>
                        <IoCameraOutline className='text-[56px]' />
                        <p>Camera</p>
                    </div>
                </div>
                <div className='h-36 ' onClick={() => handleCategoryClick('headphone')}>
                    <div className='border rounded flex flex-col items-center py-6 hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out cursor-pointer'>
                        <CiHeadphones className='text-[56px]' />
                        <p>HeadPhones</p>
                    </div>
                </div>
                <div className='h-36 ' onClick={() => handleCategoryClick('gaming')}>
                    <div className='border rounded flex flex-col items-center py-6 hover:bg-[#DB4444] hover:text-white transition duration-300 ease-in-out cursor-pointer'>
                        <LuGamepad className='text-[56px]' />
                        <p>Gaming</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;