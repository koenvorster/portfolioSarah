import { FC } from "react";
import {
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaDocker,
    FaGithub,
    FaCode,
    FaDrawPolygon,
    FaUsers,
    FaComments,
    FaLightbulb,
    FaClock,
    FaSyncAlt,
    FaEye, FaPlane, FaCamera, FaAtlassian, FaBootstrap
} from "react-icons/fa";
import { SiPython, SiWordpress } from "react-icons/si";
import {FaGauge} from "react-icons/fa6";

// Reusable component for rendering skills list
const SkillsList: FC<{ title: string; items: React.ReactNode[] }> = ({ title, items }) => (
    <div className="card10">
        <h3 className="centertitel">{title}</h3>
        <ul className="">
            {items.map((item, index) => (
                <li key={index} className=" cardSkill flex ">
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

// Reusable component for each skill item with an icon and text
const SkillItem: FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <span className="flex items-center gap-2">
    {icon} {label}
  </span>
);

const Skills: FC = () => {
    return (
        <section className="skills sectionContainer1">
            <h2 className="">My Skills</h2>
<div className="card2">
    <h2 className="skills-title">Hard skills</h2>
            {/* Programming Languages */}
            <SkillsList
                title="programming language:"
                items={[
                    <SkillItem icon={<FaCode className="icon" />} label="C#" />,
                    <SkillItem icon={<FaJs className="icon" />} label="JavaScript" />,
                    <SkillItem icon={<SiPython className="icon" />} label="Python" />
                ]}
            />

            {/* Web Development */}
            <SkillsList
                title="Web development:"
                items={[
                    <SkillItem icon={<FaReact className="icon"/>} label="React" />,
                    <SkillItem icon={<FaHtml5 className="icon" />} label="HTML, CSS" />,
                    <SkillItem icon={<FaCss3Alt className="icon" />} label="Tailwind" />,
                    <SkillItem icon={<FaBootstrap className="icon"/>} label="Bootstrap" />

                ]}
            />




            {/* Tools */}
            <SkillsList
                title="Tools:"
                items={[
                    <SkillItem icon={<FaGithub className="icon"/>} label="GitHub" />,
                    <SkillItem icon={<FaDocker className="icon" />} label="Docker" />,
                    <SkillItem icon={<SiWordpress className="icon" />} label="WordPress" />,
                    <SkillItem icon={<FaAtlassian className="icon" />} label="Jira" />,
                    <SkillItem icon={<FaGauge className="icon"/>} label="Grafana" />

                ]}
            />
</div>
<div className="card2">
            {/* Soft Skills */}
<h2 className="marginbotom">Soft skills</h2>
  <SkillsList title="" className="title"

                items={[
                    <SkillItem icon={<FaDrawPolygon className="icon" />} label="Creativity" />,
                    <SkillItem icon={<FaUsers className="icon" />} label="Teamwork" />,
                    <SkillItem icon={<FaComments className="icon" />} label="Communication" />,
                    <SkillItem icon={<FaLightbulb className="icon" />} label="Problem-solving" />,
                    <SkillItem icon={<FaClock className="icon" />} label="Time management" />,
                    <SkillItem icon={<FaSyncAlt className="icon" />} label="Adaptability" />,
                    <SkillItem icon={<FaEye className="icon" />} label="Attention to detail" />
                ]}
            />

            {/* Languages */}
            <SkillsList
                title="Languages:"
                items={[
                    <SkillItem icon={<FaUsers className="icon" />} label="Dutch (Native)" />,
                    <SkillItem icon={<FaComments className="icon" />} label="English (Fluent)" />,
                ]}
            />
            {/* Interests */}
            <SkillsList
                title="Interests:"
                items={[
                    <SkillItem icon={<FaPlane className="icon" />} label="Travel" />,
                    <SkillItem icon={<FaCamera className="icon" />} label="Photography" />,
                    <SkillItem icon={<FaEye className="icon" />} label="Technology" />,
                    <SkillItem icon={<FaEye className="icon" />} label="Technology" />

                ]}
            />


        </div>
        </section>
    );
};

export default Skills;