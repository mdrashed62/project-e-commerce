import React from 'react';
import BannerImg from "../../../public/assets/banner2.png"
import Image from 'next/image';

const SecondBanner = () => {
    return (
        <div className='min-h-[500px] flex flex-col md:flex-row justify-around bg-black my-16 items-center'>
            <div className='p-6 md:p-8 space-y-10'>
                <p className='text-green-700 font-bold mb-10'>Categories</p>
                <h2 className="text-2xl text-white font-bold md:text-5xl">Enhance Your <br /> Music Experience</h2>
                <div className='flex gap-3'>
                    <p className='rounded-full bg-white text-black text-center w-20 py-3'><span className='font-bold text-xl'>23</span> <br /> Hours</p>
                    <p className='rounded-full bg-white text-black text-center w-20 py-3'><span className='font-bold text-xl'>05</span> <br /> Days</p>
                    <p className='rounded-full bg-white text-black text-center w-20 py-3'><span className='font-bold text-xl'>59</span> <br /> MInutes</p>
                    <p className='rounded-full bg-white text-black text-center w-20 py-3'><span className='font-bold text-xl'>35</span> <br /> Seconds</p>
                </div>
                <div>
                    <button className='btn px-5 py-2 rounded-lg bg-green-400 text-white font-bold'>Buy Now</button>
                </div>
            </div>
            <div>
                <Image className='p-6' src={BannerImg} alt='Banner Image'></Image>
            </div>
        </div>
    );
};

export default SecondBanner;