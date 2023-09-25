import Image from 'next/image'
import React from 'react'

const WelcomeAndSponsors = () => {
  return (
    <div>
      <div className='flex container mx-auto p-2 my-20'>
        <div className='p-10 text-center'>
          <h1 className='mb-6 text-4xl font-bold'>WELCOME TO URBAN DRIVE HUM</h1>
          <p className='text-gray-600'>Urban Drive Hub is the proven leader in the ground transportation industry in Bangladesh, Urban Drive Hub provides unique opportunities with innovative technology in car rental services for executives and corporate travelers in Dhaka, Bangladesh. High quality service specially tailored to suit your specific business needs with dedicated reservation centers that offer `just a call away` convenience for anytime, anywhere in Bangladesh. We are offering a wide range of vehicle e.g. cars, micro bus, pick up, ambulance, truck, covered van and commercial vehicles for rent.</p>
        </div>
        <Image src='https://images.unsplash.com/photo-1567938637147-f2d28cf0478c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' width={500} height={500} alt='' className='rounded-lg' />
      </div>
      <div className='text-center my-40'>
        <h1 className='mb-6 text-4xl font-bold'>Our Sponsors</h1>
        <div className='flex justify-center mt-16 gap-16'>
          <Image src='https://businessinspection.com.bd/wp-content/uploads/2022/05/bashundhara-1.jpg' width={200} height={200} alt='' />
          <Image src='https://businessinspection.com.bd/wp-content/uploads/2022/05/city-1.jpg' width={200} height={200} alt='' />
          <Image src='https://businessinspection.com.bd/wp-content/uploads/2022/05/akij-1.jpg' width={200} height={200} alt='' />
          <Image src='https://businessinspection.com.bd/wp-content/uploads/2022/05/beximco-2.jpg' width={200} height={200} alt='' />
          <Image src='https://businessinspection.com.bd/wp-content/uploads/2022/06/S-Alam-Group-1.jpg' width={200} height={200} alt='' />
        </div>
      </div>
    </div>
  )
}

export default WelcomeAndSponsors