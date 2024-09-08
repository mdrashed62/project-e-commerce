import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Button from '../shared/Button';
import SectionHeading from '../shared/SectionHeading';


const Features = () => {
    return (
        <>
            <div className='w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='w-[80px] h-[80px] rounded-full bg-gray-400/50 flex justify-center items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center'>
                            <TbTruckDelivery className='text-3xl text-white' />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>FREE AND FAST DELIVERY</h3>
                        <p className='text-sm font-normal'>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='w-[80px] h-[80px] rounded-full bg-gray-400/50 flex justify-center items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center'>
                            <TfiHeadphoneAlt className='text-3xl text-white' />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>24/7 CUSTOMER SERVICE</h3>
                        <p className='text-sm font-normal'>Friendly 24/7 customer support</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-3'>
                    <div className='w-[80px] h-[80px] rounded-full bg-gray-400/50 flex justify-center items-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-black flex justify-center items-center'>
                            <AiOutlineSafetyCertificate className='text-3xl text-white' />
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>MONEY BACK GUARANTEE</h3>
                        <p className='text-sm font-normal'>We return money within 30 days</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;