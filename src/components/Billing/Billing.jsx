import Image from 'next/image';
import React from 'react';
import gamePad from '../../../public/assets/Gaming_Pad.png'
import monitor from '../../../public/assets/LCD_Monitor.png'
import Button from '../shared/Button';
const Billing = () => {
    return (
        <div className='py-16'>
            <p className='text-sm text-[#00000080] py-10 lg:py-20'>Account / My Account / Product / View Cart / <span className='text-black'>CheckOut</span></p>
            <div className='flex flex-col lg:flex-row justify-between items-center lg:gap-40 gap-10'>
                <div className='w-full'>
                    <h3 className='text-xl md:text-2xl lg:text-4xl font-medium'>Billing Details</h3>
                    <form className="py-12 space-y-8">
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>First Name*</label>
                            <input type="text" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>Company Name</label>
                            <input type="text" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>Street Address*</label>
                            <input type="text" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>Apartment, floor, etc. (optional)</label>
                            <input type="text" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>Town/City*</label>
                            <input type="text" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>Phone Number*</label>
                            <input type="number" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className='space-y-2'>
                            <label className='text-[#00000066]'>Email Address*</label>
                            <input type="email" id="simple-search" className="bg-[#F5F5F5] text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full h-[50px] ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                    </form>
                </div>
                <div className='w-full items-center space-y-8'>
                    <div className="grid grid-cols-4">
                        <Image src={gamePad} width={49} height={42} alt='GamePad'></Image>
                        <h4>H1 Gamepad</h4>
                        <p className='text-right col-span-2'>$650</p>
                    </div>
                    <div className="grid grid-cols-4">
                        <Image src={monitor} width={49} height={42} alt='GamePad'></Image>
                        <h4>LCD Monitor</h4>
                        <p className='text-right col-span-2'>$1100</p>
                    </div>
                    <div className='space-y-4'>
                        <div className='flex justify-between items-center pb-4 border-b '>
                            <p>Subtotal:</p>
                            <span>$1750</span>
                        </div>
                        <div className='flex justify-between items-center pb-4 border-b '>
                            <p>Shipping:</p>
                            <span>Free</span>
                        </div>
                        <div className='flex justify-between items-center pb-4 border-b '>
                            <p>Total:</p>
                            <span>$1750</span>
                        </div>
                    </div>
                    <form className='flex flex-col gap-8'>
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer" for="html">
                                <input name="framework" type="radio" className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="html" />
                                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                </span>
                            </label>
                            <label className="ml-2 text-slate-600   cursor-pointer font-medium" for="html">Bank</label>
                        </div>
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center cursor-pointer" for="html">
                                <input name="framework" type="radio" className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all" id="html" />
                                <span className="absolute bg-slate-800 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                </span>
                            </label>
                            <label className="ml-2 text-slate-600   cursor-pointer font-medium" for="html">Cash on delivary</label>
                        </div>
                    </form>
                    <div className='flex items-center gap-4'>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block max-w-[300px] h-12 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coupon Code" required />
                        <Button text={'Apply Coupon'}></Button>
                    </div>
                    <Button text={'Place Order'}></Button>
                </div>
            </div>
        </div>
    );
};

export default Billing;