import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <div className="card  mb-12">
      <h1>Contact Me</h1>
      <div className="containerfoto">
        <img
          src="/assets/img/foto/sarah1.jpg"
          alt="About me"
          className="foto_me"
        />
      </div>

      <p className="text">
        I’m Sarah Janssen, an IT professional based in Belgium. Feel free to
        reach out for collaborations, project inquiries, or just to connect!
      </p>
    </div>
  );
};

export default HeaderSection;