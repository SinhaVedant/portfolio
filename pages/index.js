import Contact from '@/components/Contact';
import HeroImage from '@/components/HeroImage';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';



export default function Home() {
  
  return (
    <div className="page container fixed top-0 left-0 w-full h-full flex flex-col md:flex-row items-center bg-black overflow-y-auto">

      <Contact />

      <HeroImage />

      <AboutMe />

      <Experience />
    </div>


  )
}
