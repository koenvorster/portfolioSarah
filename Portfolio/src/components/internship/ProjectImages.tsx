import { FC } from "react";

const ProjectImages: FC = () => {
  return (
    <div className="sectionContainer1">
      <h2>Project Images</h2>
      <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
        Here are some images from the project:
      </p>
      <div className="card flex">
        <img
          src="./src/assets/img/foto/projectBeja2.jpg"
          alt="Internship Project"
          className="internship-image"
        />
      </div>
      {/* Add more images as needed */}
    </div>
  );
};

export default ProjectImages;