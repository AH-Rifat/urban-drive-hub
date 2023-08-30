"use client"
import React from 'react'

const Navber = () => {
  return (
    <div className='flex justify-around items-center py-6 bg-blue-950'>
        <h1 className='text-white text-xl font-serif'>Urban Drive Hub</h1>
        <div className='flex gap-4'>
            <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><a className='hover:p-2 p-2' href="http://">HOME</a></li></ul>
            <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><a className='hover:p-2 p-2' href="http://">VEHICLE</a></li></ul>
            <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><a className='hover:p-2 p-2' href="http://">ABOUT US</a></li></ul>
            <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><a className='hover:p-2 p-2' href="http://">BLOG</a></li></ul>
            <ul><li className='font-bold text-white rounded-lg hover:bg-purple-400 hover:rounded-lg hover:duration-700 hover:p-2 p-2'><a className='hover:p-2 p-2' href="http://">CONTACT US</a></li></ul>
        </div>
        <button className='bg-purple-400 px-6 py-2 rounded-lg hover:bg-purple-500 hover:duration-700 text-white font-bold'>Login</button>
    </div>
  )
}

export default Navber