import React from 'react';

const SectionHeading = ({ heading, subHeading }) => {
    return (
        <div className='space-y-5'>
            <div className='flex items-center justify-start gap-3'>
                <span className='w-[20px] h-[40px] bg-[#DB4444] rounded-sm'></span>
                <h3 className='text-[#DB4444] font-bold text-sm'>{subHeading}</h3>
            </div>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>{heading}</h1>
        </div>
    );
};

export default SectionHeading;