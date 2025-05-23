import React from "react";

const SocialMediaLinks: React.FC = () => {
  return (
      <div className="card-contact">
          <h2 className="hero-h2">Connect With Me</h2>
          <p className="card-text">
              Follow me on social media to stay updated on my latest projects and
              professional journey.
          </p>
          <div className="text-left">

            <p >
              <a className="fab fa-linkedin icon" href="https://www.linkedin.com/in/sarah-janssen-27566a266/"></a>
              <a className="fab fa-github icon" href="https://github.com/Sarah-Janssen"></a>
              <a className="fab fa-instagram icon" href="https://www.instagram.com/janssen_sarah/"></a>
              <a className="fas fa-envelope icon " href="mailto:janssen.sarah1991@gmail.com"></a>
            </p>

          </div>
      </div>
  );
};

export default SocialMediaLinks;