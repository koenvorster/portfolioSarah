import { FC } from "react";
import Education from "../components/cv/Education";
import WorkExperience from "../components/cv/WorkExperience";
import Skills from "../components/cv/Skills";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import InterestSection from "@/components/cv/InterestSection.tsx";
const Cv: FC = () => {
  return (
      <div className="cv-container">
          <div className="sectionContainer5">
              <div className="card6">
                  <div className="containerfoto">
                  <img src="/src/assets/img/foto/sarah1.jpg" alt="Profile" className="img_me2"/>
                    </div>
                  <div className="social-icons">
                      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank"
                         rel="noopener noreferrer">
                          <FaLinkedin size={40}/>
                      </a>
                      <a href="https://www.instagram.com/your-instagram-profile" target="_blank"
                         rel="noopener noreferrer">
                          <FaInstagram size={40}/>
                      </a>
                      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                          <FaGithub size={40}/>
                      </a>
                  </div>

              </div>
              <div className="card7">
                  <h1 className="text__title">Sarah Janssen</h1>
                  <h2 className="text-subtitel">Student Developer | Frontend & Design Specialist</h2>
                  <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                      With a passion for design and frontend development, I specialize in creating visually appealing
                      and user-friendly interfaces. My expertise lies in HTML, CSS, JavaScript, and modern frontend
                      frameworks, focusing on delivering seamless user experiences.
                  </p>
                    <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                        I am currently pursuing a degree in IT, where I am honing my skills in web development and
                        design. I thrive on challenges and enjoy collaborating with teams to bring innovative ideas to
                        life.
                    </p>
                  <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                      I am passionate about combining creativity with technical expertise to build engaging digital
                      experiences. My background in design and development enables me to bridge the gap between
                      aesthetics and functionality effectively.
                  </p>
                  <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                      I am eager to continue growing as a frontend developer and designer, exploring new technologies
                      and contributing to projects that make a difference. I thrive in collaborative environments and am
                      always looking for opportunities to learn and innovate.
                  </p>
<div className="containerfoto">
                  <button className="btn">Download CV</button>
</div>
              </div>
          </div>

          <Skills/>
          <Education/>
          <WorkExperience/>
          <InterestSection/>

      </div>

  );
};

export default Cv;