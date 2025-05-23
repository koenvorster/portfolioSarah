import React from "react";
import "@/main.css";
import {FaCloud, FaGithub,  FaPlay, FaUsers} from "react-icons/fa";

const TestingSection: React.FC = () => {
  return (
      <section className="testing-section">
          <h2 className="testing-title">Testing Efforts:</h2>
          <p className="testing-description">
              During the Beja project, we focused on ensuring the quality and reliability of the application through
              rigorous testing efforts. Below are the key testing activities performed:
          </p>
          <img src="/assets/img/foto/Project_Beja/Testing.jpg" alt="Testing" className="testing-image" />
          <div className="testing-list">
              <p className="testing-item"><div className={"buttoncontainer"}><FaUsers size={60} className={"icon3"}/></div>
                Testing with Cypress: Simulated real-world user interactions to validate the entire
                  application flow.
              </p>
              <p className="testing-item"><div className={"buttoncontainer"}><FaCloud size={60} className={"icon3"}/></div>
                  Cypress Cloud Integration: Configured Cypress to work with Cypress Cloud for enhanced test
                  reporting and debugging.
              </p>
              <p className="testing-item"><div className={"buttoncontainer"}><FaGithub size={60} className={"icon3"}/></div>
                  Continuous Integration/Continuous Deployment (CI/CD): Set up GitHub Actions to automate the
                  testing process and ensure code quality in every deployment.
              </p>
              <p className="testing-item"><div className={"buttoncontainer"}><FaPlay size={60} className={"icon3"}/></div>
                    **Test Automation**: Developed automated test scripts to cover critical functionalities and reduce
                    manual testing efforts.
                </p>
          </div>
      </section>
  );
};

export default TestingSection;