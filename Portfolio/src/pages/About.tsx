import { FC } from "react";
import AboutHeader from "@/components/about/AboutHeader";
import WhoIAm from "@/components/about/WhoIAm";
import HobbiesAndNature from "@/components/about/HobbiesAndNature";
import TechAndGrowth from "@/components/about/TechAndGrowth";

const About: FC = () => {
  return (
      <section>
        <div>
          <AboutHeader />
          <WhoIAm />
          <HobbiesAndNature />
          <TechAndGrowth />
        </div>
      </section>
  );
};

export default About;