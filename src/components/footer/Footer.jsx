import React from 'react'
import { VscSend } from "react-icons/vsc";
import { IoLogoGooglePlaystore, IoLogoApple } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='bg-black w-auto lg:h-[440px] text-[#FAFAFA]'>
      <div className='grid grid-cols-2 mx-auto gap-x-20 md:gap-x-20 md:grid-cols-3 lg:grid-cols-5 lg:py-16 lg:px-32 md:px-20 p-10'>
        <div className='space-y-4'>
          <h2 className='text-xl md:text-2xl font-bold'>Exclusive</h2>
          <h4 className='text-lg md:text-xl font-medium'>Subscribe</h4>
          <p className=''>Get 10% off your first order</p>
          <div className='relative'>
            <input type="email" placeholder='Enter your email' className='bg-transparent border border-white p-3 rounded' />
            <div className='absolute top-3 left-44 cursor-pointer w-6 h-6'>
              <VscSend className='w-full h-full' />
            </div>
          </div>
        </div>
        <div className='space-y-4'>
          <h4 className='text-lg md:text-xl font-medium'>Support</h4>
          <p>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
          <div className='md:space-y-4 pt-14 md:pt-0'>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className='space-y-4'>
          <h4 className='text-lg md:text-xl font-medium'>Account</h4>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className='space-y-4'>
          <h4 className='text-lg md:text-xl font-medium'>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className='space-y-4 py-4 md:py-0'>
          <h4 className='text-lg md:text-xl font-medium'>Download App</h4>
          <p className='text-[12px]'>Save $3 with App New User Only</p>
          <div className='w-full lg:w-auto lg:h-[30px] space-y-4'>
            <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2">
              <div className="w-10">
                <IoLogoGooglePlaystore className='w-full h-full' />
              </div>
              <div className="w-28 md:w-auto">
                <div className="text-sm text-left">Get it on</div>
                <div className="lg:text-xl font-bold text-left">Google Play</div>
              </div>
            </button>
            <button className="px-3 py-1.5 flex gap-2 items-center rounded-xl outline outline-2">
              <div className="w-10">
                <IoLogoApple className='w-full h-full' />
              </div>
              <div className="w-28 md:w-auto">
                <div className="text-sm text-left">Download on the</div>
                <div className="lg:text-xl text-base font-bold text-left">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-[#dddddd1d]'>
        <p className='text-[#F9F9F933] text-base text-center py-5'>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
