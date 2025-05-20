import { FC } from "react";


const ProjectOverview: FC = () => {
  return (
      <div className="sectionContainer5">
          <h2>Project Overview</h2>

          <div className="card">
              <img src="/assets/img/foto/Project_Beja/lab_Beja.jpg" alt="Logo" className="foto-card"/>

              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  The water monitoring app was designed to provide real-time data on water quality and usage.
                  It aimed to help users make informed decisions and contribute to sustainability efforts.
              </p>
          </div>
          <div className="card ">
              <img src="/assets/img/foto/Project_Beja/Django_logo.png" alt="Logo" className="foto-card"/>
              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  The app was developed using Django, a powerful web framework that allowed for rapid
                  development and easy integration with various data sources.
                  It included features such as user authentication.
              </p>
          </div>
            <div className="card ">
                <img src="/assets/img/foto/Project_Beja/Postgre_sql.png" alt="Logo" className="foto-card"/>
                <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                    The app used a PostgreSQL database to store user data and water quality metrics.
                    This ensured data integrity and allowed for efficient querying and reporting.

                </p>
            </div>
          <div className="card ">
              <img src="/assets/img/foto/Project_Beja/grafanadashboard.jpg" alt="Logo" className="foto-card"/>
              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  Grafana was used for data visualization, allowing users to monitor water quality metrics in real-time.
                  This feature was crucial for ensuring the app's effectiveness and user satisfaction.
              </p>
          </div>
          <div className="card ">
              <img
                src="/assets/img/foto/Project_Beja/agile_Todo.png" alt="Logo" className="foto-card"/>
              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  I used agile methodologies to
                  facilitate communication and feedback throughout the development process.
                  I made a real sprint board to track the progress of the project.
              </p>
          </div>
          <div className="card ">
              <img src="/assets/img/foto/Project_Beja/project_internship.jpg" alt="Logo" className="foto-card"/>
              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  The internship provided me with valuable experience in project management, teamwork, and
                  problem-solving. I learned how to effectively communicate in a international organisation.
              </p>
          </div>


      </div>
  );
};

export default ProjectOverview;