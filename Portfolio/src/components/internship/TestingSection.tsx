import React from "react";
import "@/main.css";
import {FaCloud, FaGithub, FaPlay, FaUsers} from 'react-icons/fa'

const TestingSection: React.FC = () => {
  return (
    <section className="testing-section">
      <h2 className="testing-title">Testing Efforts:</h2>
      <div className="grid-container2">
        <div className="grid-item2">
          <p className="grid-item-text2">
            During the Beja project, we focused on ensuring the quality and reliability of the application through
            rigorous testing efforts. Below are the key testing activities performed:
          </p></div>
        <div className="grid-item2">
          <img src="/assets/img/foto/Project_Beja/Testing.jpg" alt="Testing" className="testing-image"/></div>

      </div>

        <div className="grid-container3">
          <div className="grid-item2">
            <p className="grid-item-text2">
              <div className={'buttoncontainer'}><FaUsers size={60} className={'icon3'}/></div>
              Testing with Cypress: Simulated real-world user interactions to validate the entire
              application flow.
            </p>
          </div>
          <div className="grid-item2">
            <p className="grid-item-text2">
              <div className={'buttoncontainer'}><FaCloud size={60} className={'icon3'}/></div>
              Cypress Cloud Integration: Configured Cypress to work with Cypress Cloud for enhanced test
              reporting and debugging.
            </p>
          </div>
          <div className="grid-item2">
            <p className="grid-item-text2">
              <div className={'buttoncontainer'}><FaGithub size={60} className={'icon3'}/></div>
              Continuous Integration/Continuous Deployment (CI/CD): Research to set up GitHub Actions to automate the
              testing process and ensure code quality in every deployment.
            </p>
          </div>
          <div className="grid-item2">
            <p className="grid-item-text2">
              <div className={'buttoncontainer'}><FaPlay size={60} className={'icon3'}/></div>
              Test Automation: Developed automated test scripts to cover critical functionalities and reduce
              manual testing efforts.
            </p>
          </div>
        </div>
    </section>
);
};

export default TestingSection;