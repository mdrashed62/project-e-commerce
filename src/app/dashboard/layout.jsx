import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
            <div className='fixed'>
                <Sidebar />
            </div>
            <div className='w-64'></div>
            <div className='flex-1 bg-gray-950'>
                {children}
            </div>
        </div>
    );
};

export default layout;