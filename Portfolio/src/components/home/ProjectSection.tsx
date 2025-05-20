import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

interface Skill {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ProjectSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch("/data/projects_homepage.json")
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
                  <Link to={skill.link || "#"} className="button">

                    <img
                        src={skill.image}
                        alt={skill.title}
                        className="card-img"
                    />
                    <div className="p-4">
                      <h2 className="projectTitel">{skill.title}</h2>
                      <p className="card-text">{skill.description}</p>
                    </div>
                  </Link>
                    <Link to={skill.link || "#"} className="btn">
                      View Project
                    </Link>

                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ProjectSection;