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

              <p><i className="fab fa-linkedin icon"></i> Linkdin/SarahJanssen</p>
              <p><i className="fab fa-github icon"></i> github.com/SarahJanssen</p>
              <p><i className="fab fa-instagram icon"></i> instagram.com/SarahJanssen</p>
              <p><i className="fas fa-envelope icon "></i> Sarahjanssen1991@gmail.com</p>
          </div>
      </div>
  );
};

export default SocialMediaLinks;