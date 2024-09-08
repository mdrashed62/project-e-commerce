import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button className='px-10 py-3 bg-[#DB4444] rounded-sm text-white text-sm font-semibold'>{text}</button>
        </div>
    );
};

export default Button;