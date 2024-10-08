"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import { FcGoogle } from "react-icons/fc";

const Page = () => {

    const router = useRouter();
    const session = useSession();

    // const searchParams = useSearchParams();
    // const path = searchParams.get('redirect')

    const handleLogin = async e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
            // callbackUrl : path ? path : '/'
        })


        if (res.status === 200) {
            router.push('/')
        }

    }


    const handleGoogle = async (provider) => {
        const res = await signIn(provider)

    }

    if (session.status === 'authenticated') {
        router.push('/');
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='hidden lg:block w-1/2'>
                <Image src={'/assets/reg-login.png'} alt='side_image' width={920} height={2} />
            </div>
            <div className='px-2 lg:px-32 space-y-8 lg:w-1/2'>
                <div className='space-y-3'>
                    <h1 className='text-3xl font-semibold'>Log in to Exclusive</h1>
                    <p className='font-medium'>Enter your details below</p>
                </div>

                <form onSubmit={handleLogin} className='space-y-8'>
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-b focus:ring-0 w-full p-2'
                        type="email" placeholder='Email' name='email' />
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-b focus:ring-0 w-full p-2'
                        type="password" placeholder='Password' name='password' />

                    <div className='flex items-center justify-between'>
                        <input
                            className='text-white font-semibold bg-[#DB4444] rounded-sm px-6 py-2 cursor-pointer'
                            type="submit" value="Log In" />

                        <p className='font-semibold text-[#DB4444]'>Forget Password?</p>
                    </div>
                </form>

                <button
                    onClick={() => handleGoogle('google')}
                    className='flex justify-center items-center gap-2 w-full py-3 rounded-sm border border-[#00000066] font-medium'><FcGoogle className='text-2xl' /> Sign up with Google</button>

                <h3 className='text-center text-[#0808089d]'>Have no account?
                    <Link href={'/register'} className='font-semibold mx-1 underline'>Sign Up</Link>
                </h3>
            </div>
        </div>
    );
};

export default Page;