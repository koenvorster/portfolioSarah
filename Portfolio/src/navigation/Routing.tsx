import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '@/pages/Home.tsx'
import Projects from '@/pages/Projects.tsx'
import Skills from '@/pages/Skills.tsx'
import About from '@/pages/About.tsx'
import Project_mobile_appje from '@/pages/projecten/Project_mobile_app.tsx'
import Internship from '@/pages/Internship.tsx'
import Project_mobile_app from "@/pages/projecten/Project_mobile_app.tsx";
import PortfolioSarah from "@/pages/projecten/PortfolioSarah.tsx";
import ProjectTesting from "@/pages/projecten/ProjectTesting.tsx";
import Travelblog from "@/pages/projecten/Travelblog.tsx";
import Contact from "@/pages/Contact.tsx";
import Cv from "@/pages/CV.tsx";
import BlogOverview from "@/pages/BlogOverview.tsx";
import BlogRobocup from "@/pages/Blog_Robocup.tsx";
import Blog_Template from "@/pages/Blog_internship.tsx";
import Blog_internship from "@/pages/Blog_internship.tsx";




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
        <Route path='/blog/Blog_Robocup' element={<BlogRobocup />} />
        <Route path='/blog/Blog_internship' element={<Blog_internship />} />

      </Routes>
    </>
  )
}

export default App