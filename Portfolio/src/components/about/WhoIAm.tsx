import { FC } from "react";
import {Link} from 'react-router-dom'


const WhoIAm: FC = () => {
  return (
      <div className="sectionContainer1">
          <h2>Who I am</h2>

          <div className="card_mynameis">
              <div className="containerfoto">
              <img src="/assets/img/foto/sarah1.jpg" alt="Sarah in a personal setting"
                   className="img_me2"/>
              </div>
              <p className="text-lg leading-relaxed text-[#d1e4d0] mb-4">
                  My name is Sarah Janssen. I’m a creative soul with a passion for IT and technology.
                  Thanks to my studies in advertising and training as a medical secretary, I’ve spent a lot of time
                  behind
                  a computer. When my boyfriend graduated as an IT professional in 2021, it sparked something in me.
                  It made me realize it was time to pursue my own dream.
              </p>
              <p className="text-lg leading-relaxed text-[#d1e4d0]">
                  I’m a perfectionist by nature, always striving for the highest possible quality and precision.
                  While this sometimes means I spend too much time perfecting tasks, it often results in excellent
                  outcomes. My desire to keep learning is what drives me to continue growing and developing myself.
              </p>
              <p className="text-lg leading-relaxed text-[#d1e4d0]">
                  I’m always open to new opportunities and challenges, so feel free to reach out if you’d like to
                  connect!
              </p>
              <div className="containerfoto">
                  <Link to={'/Cv'} className="btn">Watch my resume</Link>
              </div>
          </div>
      </div>
  );
};

export default WhoIAm;