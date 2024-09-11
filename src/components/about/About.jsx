import Image from 'next/image';
import React from 'react';
import Features from '../features/Features';

const About = () => {
    return (
        <main>
            <section className='grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8 lg:mt-20 mb-8 lg:mb-20 max-6xl mx-auto'>
            <div className='flex items-center lg:ml-14'>
             <div className='space-y-4'>
             <h1 className='text-4xl font-semibold'>Our Story</h1>
                <p>
                    Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region. 
                </p>
                <p>
                Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer goods.
                </p>
             </div>
            </div>
            <div>
                <Image 
                    src="/assets/Side Image (1).png"  
                    alt="Side Image"
                    layout="responsive"
                    width={505}
                    height={450}
                    className="w-full h-auto"
                />
            </div>
        </section>
        {/* another section */}
        <section className='mb-14'>
            <div className='lg:mx-14 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div  className='space-y-3 hover:bg-[#DB4444] hover:text-white border-[2px] p-7 rounded-md'>
            <Image className='w-[80px] mx-auto' src="/assets/Services.png" width={80} height={80} alt='service logo'/>
             <h1 className='text-3xl font-bold text-center'>10.5K</h1>
             <p className='font-bold opacity-75 text-center'>Sallers Active Our Site</p>
            </div>
            <div  className='space-y-3 hover:bg-[#DB4444] hover:text-white border-[2px] p-7 rounded-md'>
            <Image className='w-[80px] mx-auto' src="/assets/Services (1).png" width={80} height={80} alt='service logo'/>
             <h1 className='text-3xl font-bold text-center'>10.5K</h1>
             <p className='font-bold opacity-75 text-center'>Sallers Active Our Site</p>
            </div>
            <div  className='space-y-3 hover:bg-[#DB4444] hover:text-white border-[2px] p-7 rounded-md'>
            <Image className='w-[80px] mx-auto' src="/assets/Services.png" width={80} height={80} alt='service logo'/>
             <h1 className='text-3xl font-bold text-center'>10.5K</h1>
             <p className='font-bold opacity-75 text-center'>Sallers Active Our Site</p>
            </div>
            <div  className='space-y-3 hover:bg-[#DB4444] hover:text-white border-[2px] p-7 rounded-md'>
            <Image className='w-[80px] mx-auto' src="/assets/Services.png" width={80} height={80} alt='service logo'/>
             <h1 className='text-3xl font-bold text-center'>10.5K</h1>
             <p className='font-bold opacity-75 text-center'>Sallers Active Our Site</p>
            </div>
           
            </div>
            </div>
        </section>
        {/* another section */}
        <section className='lg:mb-16'>
        <div className='lg:mx-14'>
            <Image 
                    src="/assets/Frame 890.png"  
                    alt="Side Image"
                    layout="responsive"
                    width={1170}
                    height={230}
                    className="w-full h-auto"
                />
            </div>
        </section>
        <div>
            <Features></Features>
        </div>
        </main>
    );
};

export default About;
