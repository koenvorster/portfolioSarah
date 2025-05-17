import React, { useEffect, useState } from "react";

interface Skill {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProjectSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch("/src/data/projects_homepage.json")
        .then((response) => response.json())
        .then((data) => setSkills(data))
        .catch((error) => console.error("Error loading skills:", error));
  }, []);

  return (
      <div className="sectionContainer1">
        <div className="">
          <h1 className="">Watch my work.</h1>
          <div className=" mx-auto">
            <p className="lead mb-4">Discover my projects!</p>
          </div>
          <div className="skills-cards-container">
            {skills.map((skill) => (
                <div key={skill.id} className="cardProject bg-white shadow-md rounded-lg p-4">
                  <a
                      href={skill.link}
                      target="_blank"
                      className=" button"
                  >
                    <img
                        src={skill.image}
                        alt={skill.title}
                        className="card-img"
                    />
                    <div className="p-4">
                      <h2 className="projectTitel">{skill.title}</h2>
                      <p className="card-text">{skill.description}</p>
                    </div>
                  </a>
                  <button className="btn">
                    <a href={skill.link} target="_blank" >
                      View Project
                    </a>
                  </button>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ProjectSection;