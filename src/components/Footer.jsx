import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-900 mt-10 overflow-hidden'>
            <div className='h-80 flex justify-between mx-14'>
                <div className='text-slate-100 mt-16'>
                    <h1 className='text-3xl mb-10'>Urban Drive Hub</h1>
                    <p>Justo odio dignissimos ducimus qui blanditiis <br /> voluptatum deleniti corrupti quos dolores et quas <br /> molestias sint occaecati id est laborumesa etdolorum.</p>
                </div>
                <div className='text-slate-400 mt-12'>
                    <h1 className='text-xl text-slate-100 mb-10'>Quick links</h1>
                    <p>Vehicles</p>
                    <p>Blogs</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='text-slate-400 mt-12'>
                    <h1 className='text-xl text-slate-100 mb-10'>Our Services</h1>
                    <p>Corporate travels</p>
                    <p>Special events</p>
                    <p>Airport transport</p>
                    <p>Wedding limousine</p>
                </div>
            </div>
            <p className='border-t p-4 text-center text-slate-300'>© 2023 Urban Drive Hub, All Rights Reserved</p>
        </div>
    )
}

export default Footer