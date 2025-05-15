import { FC } from "react";

const WorkExperience: FC = () => {
  return (
    <section className="timeline">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-date">2017 – 2021</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Medical secretary</p>
            <p>dr. Proost, Expertise Schauvliege-Vaes – Turnhout</p>
            <p className="text-gray-600">Medical expertise: planning and organisation</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2016</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Internship Medical secretary</p>
            <p>dr. Deckers A. - Turnhout</p>
            <p className="text-gray-600">Doctor's practice: front desk work</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2015 – 2016</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Sales assistant</p>
            <p>Fruitmarkt Cools - Oud-Turnhout</p>
            <p className="text-gray-600">Serving customers, shop management</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2010 – 2015</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Assistant retail manager</p>
            <p>Zeeman - Turnhout</p>
            <p className="text-gray-600">Team coordination, shop management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;