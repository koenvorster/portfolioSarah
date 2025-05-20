import React from "react";
import {FaReact} from "react-icons/fa";
import {SiHtml5, SiNextdotjs, SiTailwindcss, SiTypescript} from "react-icons/si";


const PortfolioSarah: React.FC = () => {
    return (
        <div className="sectionContainer">
            <header className="header">
                <h1>My Personal Portfolio Website</h1>
                <p className="subtitle">
                    A dynamic and creative portfolio platform to showcase my projects, skills, and career journey.
                </p>
            </header>

            <section className="sectionContainer1">
                <div className="">
                    <h2>🌐 Project Overview</h2>
                    <img src="/assets/img/foto/ProjectPortfolio1Sarah/portfoliointro.png" alt="Background"
                         className=""/>

                    <p className="card_about text-lg leading-relaxed text-[#d1e4d0] mb-4">
                        My portfolio website <strong>(www.sarah-janssen.be)</strong> is more than just a personal page —
                        it’s a central hub where I present who I am, what I build, and how I think as a developer.
                        It includes my background in graphic design, my journey into IT, and real-world projects
                        and more.
                    </p>
                </div>
            </section>

            <section className="sectionContainer2">
                <h2>💻 Tech Stack</h2>
                <ul className="tech-stack-list">
                    <li className="card8">
                        <FaReact size={36} color="#61DBFB" className="tech-icon"/>
                        <strong> React.js</strong> – for fast and interactive UI
                    </li>
                    <li className="card8">
                        <SiTypescript size={36} color="#3178C6" className="tech-icon"/>
                        <strong> TypeScript</strong> – safer, structured code
                    </li>
                    <li className="card8">
                        <SiTailwindcss size={36} color="#38B2AC" className="tech-icon"/>
                        <strong> Tailwind CSS</strong> – utility-first design system
                    </li>
                    <li className="card8">
                        <SiNextdotjs size={36} color="#000000" className="tech-icon"/>
                        <strong> Next.js</strong> – for SEO, routing & performance
                    </li>
                    <li className="card8">
                        <SiHtml5 size={36} color="#E34F26" className="tech-icon"/>
                        <strong> HTML5</strong> – semantic structure and accessibility
                    </li>
                </ul>
            </section>

            <section className="sectionContainer1">
                <h2>🧩 Features</h2>
                <ul className={""}>

                    <li className="card8">Carousel with IT icons and visuals <img
                      src="/assets/img/foto/ProjectPortfolio1Sarah/carouselportfolio.jpg" alt=""
                      className="fotoportfolio"/></li>

                    <li className="card8">Contact form linked to email
                        <img src="/assets/img/foto/ProjectPortfolio1Sarah/contactportfolio.jpg" alt=""
                             className="fotoportfolio"/></li>

                    <li className="card8">Responsive design for mobile and tablet <video
                        src="/assets/img/portfoliofilmpjegsm.mp4"
                        className="videogsm"></video></li>

                </ul>
            </section>

            <section className="sectionContainer2">
                <h2>🎯 My Role</h2>
                <div className="card_about">

                    <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                        I designed and developed the entire platform myself — from layout and color choices,
                        to animations and routing logic. I made sure the structure was modular and easy to scale
                        as I add new projects or blogs.
                    </p>

                </div>
                <img src="/assets/img/foto/sarah1.jpg" alt="" className="img_me"/>
            </section>

            <section className="sectionContainer1">
                <h2>📌 Goals & Outcome</h2>
                <img src= "/assets/img/portfolio_grootscherm.mp4" alt="Background"/>

                <p className="card_mynameis text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    My goal was to create a portfolio that reflects my personality and skills, while also
                    being easy to navigate and visually appealing. I wanted to showcase my projects in a
                    way that highlights my growth as a developer.
                </p>
                <p className="card_mynameis text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    I achieved this by using a clean layout, engaging animations, and a responsive design
                    that works well on all devices. The site is optimized for performance and SEO, ensuring
                    that it loads quickly and ranks well in search engines.
                </p>
                <p className="card_mynameis text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    I also focused on making the site accessible, ensuring that it meets the needs of all users.
                    This includes using semantic HTML, proper color contrast, and keyboard navigation.
                </p>
                <p className="card_mynameis text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    I’m proud of the final result and excited to continue adding new projects and features
                    as I grow in my career.
                </p>

            </section>

            <section className="sectionContainer4">
                <h2>🚀 Live Demo</h2>
                <video src="/assets/img/portfoliofilmpjegsm.mp4"
                       className="videogsm"
                       controls></video>
                <video src="/assets/img/portfolio_grootscherm.mp4"
                       className="videodemo"
                       controls></video>
                <div className="card_about">


                    <p className=" text-lg leading-relaxed text-[#d1e4d0] mb-4">
                        You can check out my live portfolio website at{" "}
                        <a
                            href="https://www.sarah-janssen.be"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            www.sarah-janssen.be.
                        </a> <br/>’m always looking for feedback, so feel free to reach out!
                    </p></div>
                <a
                    href="https://www.sarah-janssen.be"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    Visit Live Website ↗
                </a>
            </section>

        </div>
    );
};

export default PortfolioSarah;
