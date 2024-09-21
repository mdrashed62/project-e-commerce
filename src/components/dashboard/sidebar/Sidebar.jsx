import Button from '@/components/shared/Button';
import Link from 'next/link';
import React from 'react';
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
    return (
        <div className='w-64 bg-slate-800 h-screen flex flex-col py-4'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold'><span className='text-white'>Trend</span> <span className='text-red-600'>Shop</span></h1>
            </div>

            <div className='flex-1 space-y-7 text-slate-500 text-lg font-semibold mt-6 pl-5'>
                <Link href={'/dashboard'} className='flex items-center gap-2'><LuLayoutDashboard /> Dashboard</Link>
                <Link href={'/dashboard'} className='flex items-center gap-2'><LuLayoutDashboard /> Customers</Link>
                <Link href={'/dashboard'} className='flex items-center gap-2'><LuLayoutDashboard /> Orders</Link>
                <Link href={'/dashboard'} className='flex items-center gap-2'><LuLayoutDashboard /> Our Staff</Link>
                <Link href={'/dashboard'} className='flex items-center gap-2'><LuLayoutDashboard /> Settings</Link>
            </div>
            <div className='pl-5'>
                <Button text={'Logout'} />
            </div>
        </div>
    );
};

export default Sidebar;