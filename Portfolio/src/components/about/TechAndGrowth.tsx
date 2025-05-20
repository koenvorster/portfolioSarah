import { FC } from "react";


const TechAndGrowth: FC = () => {
  return (
      <div className="sectionContainer1">

          <h2 className="text-green-300 uppercase tracking-widest text-sm mb-2">Tech & Growth</h2>
          <div className="card7">
              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  I love working with tools like <span className="text-green-400">React, Cypress</span>, and <span
                  className="text-green-400">Confluence</span>,
                  and collaborating via <span className="text-green-400">Jira and Git</span>. Clear communication and
                  teamwork are essential to success in any project.
              </p>
              <p className="text-lg leading-relaxed text-[#d1e4d0]">
                  My goal is to grow as a developer and tester, and to contribute to inspiring, innovative projects.
                  I’m always eager to explore new technologies and challenge myself to go further.
              </p>
          </div>
          <div>
              <img
                  src="/assets/img/foto/Project_Beja/sarahMetLaptop.jpg"
                  alt="Tech setup or programming environment"
                  className="foto_laptop "
              />
          </div>
      </div>
  );
};

export default TechAndGrowth;