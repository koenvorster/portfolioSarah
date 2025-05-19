import React from "react";
import "@/main.css";

const TestingSection: React.FC = () => {
  return (
      <section className="testing-section">
          <h2 className="testing-title">Testing Efforts:</h2>
          <p className="testing-description">
              During the Beja project, we focused on ensuring the quality and reliability of the application through
              rigorous testing efforts. Below are the key testing activities performed:
          </p>
          <img src={"./src/assets/img/foto/Project_Beja/Testing.jpg"} alt="Testing" className="testing-image" />
          <ul className="testing-list">
              <li className="testing-item">
                  **End-to-End Testing with Cypress**: Simulated real-world user interactions to validate the entire
                  application flow.
              </li>
              <li className="testing-item">
                  **Cypress Cloud Integration**: Configured Cypress to work with Cypress Cloud for enhanced test
                  reporting and debugging.
              </li>
              <li className="testing-item">
                  **Continuous Integration/Continuous Deployment (CI/CD)**: Set up GitHub Actions to automate the
                  testing process and ensure code quality in every deployment.
              </li>
                <li className="testing-item">
                    **Test Automation**: Developed automated test scripts to cover critical functionalities and reduce
                    manual testing efforts.
                </li>
          </ul>
      </section>
  );
};

export default TestingSection;