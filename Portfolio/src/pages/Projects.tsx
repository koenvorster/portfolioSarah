import { FC, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {FaLaptop} from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
}

const Projects: FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    // Fetch the project data from the JSON file
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  const handleFilter = (category: string) => {
    setActiveCategory(category);
    filterProjects(category, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterProjects(activeCategory, term);
  };

  const filterProjects = (category: string, term: string) => {
    let filtered = projects;

    if (category !== "All") {
      filtered = filtered.filter((project) => project.category === category);
    }

    if (term) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  return (
    <section className="projects">
      <h1 className="text-2xl font-bold mb-6">My Projects</h1>



      {/* Project Cards */}
        <div className="sectionContainer1">

            <div className="card7">
                <div className="buttoncontainer">   <FaLaptop size={40} color="#cc5c2d"  className="logo3"/></div>

                <p className="text-left">
                    As a programming student, I have already completed several projects, some of which I would like to
                    share
                    with you. On this page, you will find an overview of the projects I created or collaborated on. By
                    clicking on a project, you can view each project individually and find more detailed information
                    about
                    the programming languages and technologies used. Would you like to know more about a particular
                    project?
                    Then don't hesitate to contact me.
                </p>
            </div>


            <div className="">  {/* Filter Navbar */}
                <div className=" navbarprojects filter-navbar flex flex-wrap items-center space-x-4 mb-6">

                    <button
                        onClick={() => handleFilter("School Projects")}
                        className={`px-4 py-2 rounded ${activeCategory === "School Projects" ? "bg-[#CC5C2D] text-white" : "bg-gray-200 text-black"}`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => handleFilter("Create & Design")}
                        className={`px-4 py-2 rounded ${activeCategory === "Create & Design" ? "bg-[#CC5C2D] text-white" : "bg-gray-200 text-black"}`}
                    >
                        Create & Design
                    </button>
                    <button
                        onClick={() => handleFilter("Extra")}
                        className={`px-4 py-2 rounded ${activeCategory === "Extra" ? "bg-[#CC5C2D] text-white" : "bg-gray-200 text-black"}`}
                    >
                        Extra
                    </button>
                    <button
                        onClick={() => handleFilter("All")}
                        className={`px-4 py-2 rounded ${activeCategory === "All" ? "bg-[#CC5C2D] text-white" : "bg-gray-200 text-black "}`}
                    >
                        show all
                    </button>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="searchprojects"
                    />
                </div>

                <div className="sectionContainer2">

                    {filteredProjects.map((project) => (
                        <div key={project.id} className="card ">
                            <div className="card-image">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="card-img"
                            />
                            </div>
                            <div className="p-4">
                                <h2 className=" font-semibold">{project.title}</h2>
                                <p className="  card-text text-gray-600">{project.description}</p>
                                <div className="buttoncontainer">
                                <button>
                                    <Link to={project.link} >  View Project</Link>
                                </button>
                            </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div>
            </div>
        </div>
    </section>
  );
};

export default Projects;