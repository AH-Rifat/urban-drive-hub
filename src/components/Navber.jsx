"use client"
import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <div className='flex justify-around items-center py-6 bg-blue-950'>
      <h1 className='text-white text-xl font-serif'>Urban Drive Hub</h1>
      <div className='flex gap-4'>
        <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><Link className='hover:p-2 p-2' href="/">HOME</Link></li></ul>
        <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><Link className='hover:p-2 p-2' href="http://">VEHICLE</Link></li></ul>
        <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><Link className='hover:p-2 p-2' href="/pages/about">ABOUT US</Link></li></ul>
        <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><Link className='hover:p-2 p-2' href="http://">BLOG</Link></li></ul>
        <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><Link className='hover:p-2 p-2' href="http://">CONTACT US</Link></li></ul>
      </div>
      <Link href="/pages/login" className='bg-purple-400 px-6 py-2 rounded-lg hover:bg-purple-500 hover:duration-700 text-white font-bold'>Login</Link>
    </div>
  )
}

export default Navber