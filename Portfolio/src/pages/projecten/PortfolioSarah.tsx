import React from "react";
import Image from "next/image";



const PortfolioSarah: React.FC = () => {
    return (
        <div className="sectionContainer">
            <header className="header">
                <h1>My Personal Portfolio Website</h1>
                <p className="subtitle">
                    A dynamic and creative portfolio platform to showcase my projects, skills, and career journey.
                </p>
            </header>
<img src="../assets/img/foto/ProjectPortfolio1Sarah/portfolio_Sarah.jpg" alt="" className="foto-card"/>

            <section className="sectionContainer1">
                <div className="">
                <h2>🌐 Project Overview</h2>
                <p className="card_about text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    My portfolio website <strong>(www.sarah-janssen.be)</strong> is more than just a personal page —
                    it’s a central hub where I present who I am, what I build, and how I think as a developer.
                    It includes my background in graphic design, my journey into IT, and real-world projects
                    like my Erasmus internship, hackathons, and development work in React, Django, and more.
                </p>
                </div>
            </section>

            <section className="sectionContainer2">
                <h2>💻 Tech Stack</h2>
                <ul className={""}>
                    <li className="card8"> <strong>React.js</strong> – for fast and interactive UI</li>
                    <li className="card8"><strong>TypeScript</strong> – safer, structured code</li>
                    <li className="card8"><strong>Tailwind CSS</strong> – utility-first design system</li>
                    <li className="card8"><strong>Next.js (planned)</strong> – for SEO, routing & performance</li>
                    <li className="card8"><strong>Vercel</strong> – continuous deployment & hosting</li>
                </ul>
            </section>

            <section className="sectionContainer1">
                <h2>🧩 Features</h2>
                <ul className={""}>
                    <li className="card_about">Project pages with detail views and tech explanations</li>
                    <li>Carousel with IT icons and visuals</li>
                    <li>Dark mode toggle (optional)</li>
                    <li>Contact form linked to email</li>
                    <li>Responsive design for mobile and tablet</li>
                </ul>
            </section>

            <section className="sectionContainer2">
                <h2>🎯 My Role</h2>
                <p className="card_about text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    I designed and developed the entire platform myself — from layout and color choices,
                    to animations and routing logic. I made sure the structure was modular and easy to scale
                    as I add new projects or blogs.
                </p>
            </section>

            <section className="sectionContainer1">
                <h2>📌 Goals & Outcome</h2>
                <p>
                    This site is both a creative outlet and a professional tool. It reflects my personality
                    while staying practical for recruiters and clients. I plan to evolve it by integrating
                    a blog system, backend project stats, and a CMS like Sanity or Strapi.
                </p>
            </section>

            <section className="sectionContainer4">
                <h2>🚀 Live Demo</h2>
                <p className="card_about text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    You can check out my live portfolio website at{" "}
                    <a
                        href="https://www.sarah-janssen.be"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        www.sarah-janssen.be
                    </a>
                    . I’m always looking for feedback, so feel free to reach out!
                </p>
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
