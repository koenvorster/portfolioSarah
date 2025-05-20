import { FC } from "react";
import {Link} from 'react-router-dom'

const HeroSection: FC = () => {
  return (
      <section className="internship-container">
          <div className="internship-header ">
              <div className="i">
                  <video
                      src="/assets/img/Videoproject_portugal.mp4"
                      className="internship-video"
                      controls
                  />

              </div>
          </div>
          <div className="cardintro text-center">

              <p className="card-text">
                  During my internship in Beja, Portugal, I worked on creating a water monitoring app.
                  This project involved designing and developing a user-friendly interface, integrating
                  real-time data, and ensuring the app met the needs of the stakeholders.
              </p>
              <p className="card-text">
                  Overall, the water monitoring app project was a rewarding experience that allowed me to apply
                  my skills in a real-world setting and contribute to a meaningful cause.
              </p>
              <div className="containerfoto">

                <Link to={'Blog_internship'} className="btn text-blue-500 hover:underline">Read more</Link>
              </div>

          </div>

      </section>
  );
};

export default HeroSection;