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
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">Watch my work.</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Discover my projects!</p>
          </div>
          <div className="skills-cards-container d-flex flex-wrap justify-content-center gap-3">
            {skills.map((skill) => (
                <div key={skill.id} className="card bg-white shadow-md rounded-lg p-4">
                  <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" button"
                  >
                    <img
                        src={skill.image}
                        alt={skill.title}
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h2 className="">{skill.title}</h2>
                      <p className="">{skill.description}</p>
                    </div>

                  </a>
<button className="btn">
                    <a href={skill.link} target="_blank" rel="noopener noreferrer">
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