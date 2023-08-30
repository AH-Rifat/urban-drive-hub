"use client"
import Image from 'next/image'
import React from 'react'
import carimg from '../../public/cars.jpg'
import cargoimg from '../../public/cargo-vans.jpg'
import microbusimg from '../../public/microbus.jpg'
import minibusimg from '../../public/minibus.jpg'
import truckimg from '../../public/truck.jpg'
import picupimg from '../../public/vans-single-cab.jpg'

const OurVehicles = () => {
    const vehicles = [
        {
            'id': 1,
            'name': 'Private Car',
            'imgUrl': carimg,
        },
        {
            'id': 2,
            'name': 'Cargo Van',
            'imgUrl': cargoimg,
        },
        {
            'id': 3,
            'name': 'Microbus',
            'imgUrl': microbusimg,
        },
        {
            'id': 4,
            'name': 'Minibus',
            'imgUrl': minibusimg,
        },
        {
            'id': 5,
            'name': 'Truck',
            'imgUrl': truckimg,
        },
        {
            'id': 6,
            'name': 'Picup Vans',
            'imgUrl': picupimg,
        },
    ]

    return (
        <div className='my-14'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>First Class Car Rental & Limousine Services</h1>
                <p className='font-semibold text-slate-700'>We offer professional car rental & limousine services in our range of high-end vehicles</p>
            </div>

            <div className='grid lg:grid-cols-3 lg:gap-y-5 text-center mt-12 ml-14'>
                {
                    vehicles.map(vehicle => {
                        return <div key={vehicle.id} className='border rounded-xl border-white h-[16rem] w-96'>
                            <Image className='rounded-xl brightness-50 hover:shadow-lg hover:duration-300 hover:shadow-blue-900' src={vehicle.imgUrl} alt='vehicles-image' width={400} height={200} />
                            <h1 className='relative bottom-12 left-36 text-white font-semibold text-xl w-32'>{vehicle.name}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default OurVehicles