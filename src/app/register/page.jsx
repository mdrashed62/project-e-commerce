"use client"

import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Page = () => {

    const router = useRouter();
    const session = useSession();

    const handelSignUp = async e =>{
        e.preventDefault();

        const form = e.target;

        const newUser = {
            name: form.name.value,
            email: form.email.value,
            password: form.password.value,
        }


        const res = await fetch("http://localhost:3000/register/api",{
            method: "POST",
            body: JSON.stringify(newUser),
            headers:{
                "content-type" : "application/json"
            }
        })

        const response = await res.json()
        if(response?.response?.insertedId){
            e.target.reset();

            router.push('/login')
        }
    }


    const handleGoogle = async (provider) =>{
        const res = await signIn(provider)

    }

    if(session.status === 'authenticated'){
        router.push('/');
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='hidden lg:block w-1/2'>
                <Image src={'/assets/reg-login.png'} alt='side_image' width={920} height={200} />
            </div>
            <div className='px-2 lg:px-32 space-y-8 lg:w-1/2'>
                <div className='space-y-3'>
                    <h1 className='text-3xl font-semibold'>Create an account</h1>
                    <p className='font-medium'>Enter your details below</p>
                </div>

                <form onSubmit={handelSignUp} className='space-y-8'>
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-b focus:ring-0 w-full p-2'
                        type="text" placeholder='Name' name='name' />
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-b focus:ring-0 w-full p-2'
                        type="email" placeholder='Email' name='email' />
                    <input
                        className='border-b border-[#00000066] focus:outline-none focus:border-b focus:ring-0 w-full p-2'
                        type="password" placeholder='Password' name='password' />

                    <input
                        className='w-full text-white font-semibold bg-[#DB4444] rounded-sm py-3 cursor-pointer'
                        type="submit" value="Create Account" />
                </form>

                <button 
                onClick={() => handleGoogle('google')}
                className='flex justify-center items-center gap-2 w-full py-3 rounded-sm border border-[#00000066] font-medium'><FcGoogle className='text-2xl' /> Sign up with Google</button>

                <h3 className='text-center text-[#0808089d]'>Already have account?
                    <Link href={'/login'} className='font-semibold mx-1 underline'>Log in</Link>
                </h3>
            </div>
        </div>
    );
};

export default Page;