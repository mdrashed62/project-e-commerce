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
            <div className='lg:mx-14'>
            <Image 
                    src="/assets/Frame 891.png"  
                    alt="Side Image"
                    layout="responsive"
                    width={1170}
                    height={230}
                    className="w-full h-auto"
                />
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
