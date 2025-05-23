import {FC} from 'react'
import Hero from '@/components/home/Hero.tsx'
import ProjectSection from '@/components/home/ProjectSection.tsx'
import AboutSection from '@/components/home/AboutSection.tsx'
import SkillsSection1 from '@/components/home/SkillsSection1.tsx'
import ContactSection from '@/components/home/ContactSection.tsx'
import Carouselsection from "@/components/home/Carouselsection.tsx";


const Home: FC = () => {
  return (
    <div>
      <Hero/>
      <ProjectSection/>
      <AboutSection/>
        <SkillsSection1/>
        <Carouselsection/>
      <ContactSection/>
    </div>

  )
}

export default Home
