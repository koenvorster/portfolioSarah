import { FC } from "react";


const ProjectImages: FC = () => {
  return (
      <div className="sectionContainer2">
          <h2>Project Images</h2>


          <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
              The project involved creating a dashboard for monitoring and
              controlling various aspects of the system.
              The images below showcase the dashboard interface and its
              functionalities.

          </p>
          {/* Add more images as needed */}
          <div className="card3">
              <img
                  src="/assets/img/foto/Project_Beja/dashboardInternship.png"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
          <div className="card2">
              <img
                  src="/assets/img/foto/Project_Beja/projectBeja2.jpg"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
          <div className="card2">
              <img
                  src="/assets/img/foto/Project_Beja/grafanadashboard.jpg"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
          <div className="card2">
              <img
                  src="/assets/img/foto/Project_Beja/scherm_project.jpg"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
          <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
                The images below showcase the dashboard interface and its
                functionalities.

          </p>
          <div className="card3">
              <img
                  src="/assets/img/foto/Project_Beja/dashboardmeters.png"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
          <p className="card text-lg leading-relaxed text-[#d1e4d0] mb-4">
                The images below showcase the dashboard interface and its
                functionalities.
          </p>
          <div className="card3">
              <img
                  src="/assets/img/foto/Project_Beja/lab_Beja.jpg"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
          <div className="card">
              <img
                  src="/assets/img/foto/Project_Beja/sarahMetLaptop.jpg"
                  alt="Internship Project"
                  className="internship-image"
              />
          </div>
      </div>
  );
};

export default ProjectImages;