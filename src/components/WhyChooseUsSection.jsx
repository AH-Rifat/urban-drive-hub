import React from 'react'
import carIcon from './../../public/icons/carIcon.png'
import Image from 'next/image'

const WhyChooseUsSection = () => {
    return (
        <div className='bg-blue-900 h-screen mt-20 text-center overflow-hidden'>
            <div className='mt-20 mr-16'>
                <h1 className='text-white font-bold text-4xl'>Why Choose Us</h1>
                <p className='text-slate-300 mt-4'>Explore our first class limousine & car rental services</p>
            </div>

            <div className='flex gap-20 mt-20 justify-center items-center'>
                <div className='flex flex-col items-center'>
                    <Image className='' src={carIcon} width={100} height={100} alt='icon' />
                    <h1 className='text-white text-3xl mb-4 font-bold'>Variety of Car Brands</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectadipiscing <br /> elit. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>
                    <h1 className='text-white text-3xl mb-4 font-bold'>Best Rate Guarantee</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectadipiscing <br /> elit. Aenean commodo ligula eget dolor.</p>
                </div>
                <div className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <h1 className='text-white text-3xl mb-4 font-bold'>Awesome Customer Support</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectadipiscing <br /> elit. Aenean commodo ligula eget dolor.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsSection