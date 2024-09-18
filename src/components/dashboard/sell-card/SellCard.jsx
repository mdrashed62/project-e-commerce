import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { FaRotate } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdDone } from "react-icons/md";

const SellCard = () => {
    return (
        <>
            <div className='grid grid-cols-5 gap-4'>
                <div className='flex flex-col items-center justify-center space-y-4 p-5 rounded-lg bg-teal-400'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path></svg>
                    <h3 className='text-lg font-semibold text-white'>Today Orders</h3>
                    <h1 className='text-2xl font-bold text-white'>₹1648.50</h1>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4 p-5 rounded-lg bg-orange-400'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path></svg>
                    <h3 className='text-lg font-semibold text-white'>Yesterday Orders</h3>
                    <h1 className='text-2xl font-bold text-white'>₹1127.29</h1>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4 p-5 rounded-lg bg-[#DB4444]'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path></svg>
                    <h3 className='text-lg font-semibold text-white'>This Month</h3>
                    <h1 className='text-2xl font-bold text-white'>₹3954.96</h1>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4 p-5 rounded-lg bg-blue-400'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path></svg>
                    <h3 className='text-lg font-semibold text-white'>Last Month</h3>
                    <h1 className='text-2xl font-bold text-white'>₹22220.56</h1>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4 p-5 rounded-lg bg-green-400'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M16 5l-8-4-8 4 8 4 8-4zM8 2.328l5.345 2.672-5.345 2.672-5.345-2.672 5.345-2.672zM14.398 7.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199zM14.398 10.199l1.602 0.801-8 4-8-4 1.602-0.801 6.398 3.199z"></path></svg>
                    <h3 className='text-lg font-semibold text-white'>All-Time Sales</h3>
                    <h1 className='text-2xl font-bold text-white'>₹178224.57</h1>
                </div>

            </div>

            <div className='grid grid-cols-4 gap-4 mt-4'>
                <div className='flex items-center gap-4 pl-3 py-4 rounded-lg bg-slate-800'>
                    <button className='p-3 rounded-full bg-orange-500'>
                        <CiShoppingCart className='text-xl text-white' />
                    </button>
                    <div>
                        <h5 className='text-base font-medium text-slate-400'>Total Order</h5>
                        <h2 className='text-2xl font-bold text-slate-300'>251</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4 pl-3 py-4 rounded-lg bg-slate-800'>
                    <button className='p-3 rounded-full bg-orange-500'>
                        <FaRotate className='text-xl text-white' />
                    </button>
                    <div>
                        <h5 className='text-base font-medium text-slate-400'>Orders Pending</h5>
                        <h2 className='text-2xl font-bold text-slate-300'>65</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4 pl-3 py-4 rounded-lg bg-slate-800'>
                    <button className='p-3 rounded-full bg-orange-500'>
                        <CiDeliveryTruck className='text-xl text-white' />
                    </button>
                    <div>
                        <h5 className='text-base font-medium text-slate-400'>Orders Processing</h5>
                        <h2 className='text-2xl font-bold text-slate-300'>26</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4 pl-3 py-4 rounded-lg bg-slate-800'>
                    <button className='p-3 rounded-full bg-orange-500'>
                    <MdDone className='text-xl text-white' />
                    </button>
                    <div>
                        <h5 className='text-base font-medium text-slate-400'>Orders Delivered</h5>
                        <h2 className='text-2xl font-bold text-slate-300'>132</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SellCard;