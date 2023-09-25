import Image from 'next/image'
import heroImg from '../../public/hero.jpeg'

const HeroSection = () => {
  return (
    <div>
      <Image src={heroImg} width={1370} priority={true} alt="" className="relative object-cover h-[32.7rem] brightness-75" />
      <div className='absolute top-64 left-80 text-center text-white font-semibold'>
        <h1 className='text-6xl mb-6'>Find Best Car For Rental</h1>
        <p className='text-lg'>From as low as 500tk per day with limited time offer discounts</p>
      </div>
    </div>
  )
}

export default HeroSection