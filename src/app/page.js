import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import OurVehicles from '@/components/OurVehicles'
import WelcomeAndSponsors from '@/components/WelcomeAndSponsors'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurVehicles />
      <WhyChooseUsSection />
      <WelcomeAndSponsors/>
      <Footer />
    </main>
  )
}
