import { FC } from "react";
import "@/main.css";
import HeroSection from '@/components/internship/HeroSection.tsx'

const ProjectTesting: FC = () => {
    return (
        <section className="internship Container1">
            <h1 className="text-3xl font-bold mb-6">Testing project</h1>

            <div className="internship-content">
                <img
                    src="@/assets/img/foto/Project_Beja/Beja.jpg"
                    alt="Internship Project"
                    className="internship-image"
                />
                <div className="internship-details">
                    <p className=" text-lg mb-4">
                        During my internship in Beja, Portugal, I worked on creating a water monitoring app.
                        This project involved designing and developing a user-friendly interface, integrating
                        real-time data, and ensuring the app met the needs of the stakeholders.
                    </p>
                    <a
                        href="https://example.com/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-blue-500 hover:underline"
                    >
                        Read More
                    </a>

                </div>

            </div>


            <HeroSection/>
            <div className="sectionContainer4">
                <h2>Project Overview</h2>
                <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    The water monitoring app was designed to provide real-time data on water quality and usage.
                    It aimed to help users make informed decisions about their water consumption and contribute
                    to sustainability efforts.
                </p>
                <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    The project involved collaboration with local stakeholders to ensure the app met their needs
                    and provided valuable insights into water management.
                </p>
                <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    The internship provided me with valuable experience in project management, teamwork, and
                    problem-solving.
                    I learned how to effectively communicate with stakeholders and adapt to changing requirements
                    throughout the project lifecycle.
                </p>
            </div>

            <div className="sectionContainer1">
                <h2>Project Images</h2>
                <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    Here are some images from the project:
                </p>


                <div className="card flex">
                    <img
                        src="@/assets/img/foto/projectBeja2.jpg"
                        alt="Internship Project"
                        className="internship-image"
                    />
                </div>
                <div className="card flex">
                    <img
                        src="./src/assets/img/foto/projectBeja2.jpg"
                        alt="Internship Project"
                        className="internship-image"
                    />

                </div>
                <div className="card flex">
                    <img
                        src="./src/assets/img/foto/projectBeja2.jpg"
                        alt="Internship Project"
                        className="internship-image"
                    />
                </div>
                <div className="card flex">
                    <img
                        src="./src/assets/img/foto/projectBeja2.jpg"
                        alt="Internship Project"
                        className="internship-image"
                    />
                </div>
                <div className="card flex">
                    <img
                        src="./src/assets/img/foto/projectBeja2.jpg"
                        alt="Internship Project"
                        className="internship-image"
                    />
                </div>

            </div>

        </section>

    );
};

export default ProjectTesting;