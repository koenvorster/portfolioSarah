import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import Projects from '@/pages/Projects.tsx'
import Skills from '@/pages/Skills.tsx'
import About from '@/pages/About.tsx'
import Internship from '@/pages/Internship.tsx'
import Project_mobile_app from "@/pages/projecten/Project_mobile_app.tsx";
import PortfolioSarah from "@/pages/projecten/PortfolioSarah.tsx";
import ProjectTesting from "@/pages/projecten/ProjectTesting.tsx";
import Travelblog from "@/pages/projecten/Travelblog.tsx";
import Contact from "@/pages/Contact.tsx";
import Cv from "@/pages/Cv.tsx";
import BlogOverview from "@/pages/BlogOverview.tsx";
import Blog_robocup from "@/pages/Blog_robocup.tsx";
import Blog_hackathon from "@/pages/Blog_hackathon.tsx";
import Blog_internship from "@/pages/Blog_internship.tsx";
import ErrorPage from "@/pages/ErrorPage.tsx";




const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path="/internship" element={<Internship />} />
        <Route path='/about' element={<About />} />
        <Route path='/projecten/project_mobile_app' element={<Project_mobile_app/>} />
        <Route path='/projecten/project_testing' element={<ProjectTesting />} />
        <Route path='/projecten/travelblog' element={<Travelblog />} />
        <Route path='/projecten/portfoliosarah' element={<PortfolioSarah />} />
        <Route path='/cv' element={<Cv />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogoverview' element={<BlogOverview />} />
        <Route path='/blog/Blog_robocup' element={<Blog_robocup />} />
        <Route path='/blog/Blog_internship' element={<Blog_internship />} />
        <Route path='/blog/Blog_hackathon' element={<Blog_hackathon />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App