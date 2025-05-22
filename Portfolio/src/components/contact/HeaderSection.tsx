import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <div className="card-contact  mb-12">
      <h2 className="hero-h2">Contact Me</h2>
      <div className="containerfoto">
        <img
          src="/assets/img/foto/sarah1.jpg"
          alt="About me"
          className="foto_me2"
        />
      </div>

      <p className="card-text">
        I’m Sarah Janssen, an IT professional based in Belgium. Feel free to
        reach out for collaborations, project inquiries, or just to connect!
      </p>
    </div>
  );
};

export default HeaderSection;