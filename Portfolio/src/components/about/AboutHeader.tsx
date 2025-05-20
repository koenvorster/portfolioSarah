import { FC } from "react";

const AboutHeader: FC = () => {
  return (
      <div className="sectionContainer2 ">
          <h1 className="about-me-title text-center ">
              <span className="about">About </span><br/> <span className="me">me</span>
          </h1>


              <img src="/assets/img/foto/Project_Beja/sarahMetLaptop.jpg" alt="About me"
                   className="aboutImage2 "/>

          <div>
              <p className="card_about ">

                  Curious why I decided to go back to school? Or more interested in the person behind this website?
                  On this page, you’ll find a little more information about who I am and what I do in my free time.
              </p>

          </div>
      </div>
  );
};

export default AboutHeader;