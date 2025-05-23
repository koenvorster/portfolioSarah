import React from "react";

const SkillsSection1: React.FC = () => {
    const hardSkills = [
        { name: "C#, Python, TypeScript", icon: "fas fa-code" },
        { name: "HTML, CSS, Bootstrap ", icon: "fab fa-html5" },
        { name: "SQL, PostgreSQL", icon: "fas fa-database" },
        { name: "Cypress, Playwright", icon: "fas fa-vial" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "GitHub", icon: "fab fa-github" },
    ];

    const softSkills = [
        { name: "Creativity", icon: "fas fa-lightbulb" },
        { name: "Result-oriented", icon: "fas fa-bullseye" },
        { name: "Independence", icon: "fas fa-user" },
        { name: "Planning and organising", icon: "fas fa-calendar-alt" },
        { name: "Working together", icon: "fas fa-users" },
        { name: "Customer-oriented", icon: "fas fa-handshake" },
    ];

    return (
        <div className="skills-container">
            <h2 className="skills-h1">My skills</h2>
            <div className="skills-cards">
                {/* Hard Skills Card */}
                <div className="card2">
                    <h3 className="hero-h2 ">Hard Skills</h3>

                    {hardSkills.map((skill, index) => (
                        <p className="cardSkill">
                        <div key={index} className="skill-item text-right">
                            <i className={`${skill.icon} icon2`}></i>
                            {skill.name}
                        </div>
            </p>
                    ))}

                </div>
                {/* Soft Skills Card */}
                <div className="card2">
                    <h3 className="hero-h2 ">Soft Skills</h3>

                    {softSkills.map((skill, index) => (
                        <p className="cardSkill">
                        <div key={index} className="skill-item text-right">
                            <i className={`${skill.icon} icon2`}></i>
                            {skill.name}
                        </div></p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection1;