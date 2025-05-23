import React from "react";

const SocialMediaLinks: React.FC = () => {
  return (
      <div className="card-contact">
          <h2 className="hero-h2">Connect With Me</h2>
          <p className="card-text2">
              Follow me on social media to stay updated on my latest projects and
              professional journey.
          </p>
         <div className="socialscontact">
              <ul>
                  <li>
                      <a href="https://www.linkedin.com/in/SarahJanssen" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-linkedin list-socials"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://github.com/SarahJanssen" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-github list-socials"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://www.instagram.com/SarahJanssen" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram list-socials"></i>
                      </a>
                  </li>
                  <li>
                      <a href="mailto:Sarahjanssen1991@gmail.com">
                          <i className="fas fa-envelope list-socials"></i>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  );
};

export default SocialMediaLinks;