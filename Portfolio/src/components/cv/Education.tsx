import { FC } from "react";

const Education: FC = () => {
  return (
    <section className="timeline">
      <h2 className="text-xl font-semibold mb-4">Training and experience</h2>
        <div className="sectionContainer1">

        </div>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-date">2023 – Present</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Associate degree Programming</p>
            <p>Thomas More Hogeschool - Turnhout</p>
            <p className="text-gray-600">JavaScript, HTML, CSS, Linux, C#, OOP, GitHub, …</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2016 – 2017</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Medical secretary</p>
            <p>Syntra - Turnhout</p>
            <p className="text-gray-600">Communication skills</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-date">2009</div>
          <div className="timeline-line"></div>
          <div className="timeline-content">
            <p className="font-semibold">Publicity and illustrations</p>
            <p>Heilig Graf Instituut - Turnhout</p>
            <p className="text-gray-600">Designing and implementing projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;