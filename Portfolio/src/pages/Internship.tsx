import { FC } from "react";
import HeroSection from "@/components/internship/HeroSection";
import ProjectOverview from "@/components/internship/ProjectOverview";
import ProjectImages from "@/components/internship/ProjectImages";
import DownloadSection from "@/components/internship/DowloadSection.tsx";
import TestingSection from "@/components/internship/TestingSection.tsx";
import VideoSection from "@/components/internship/VideoSection.tsx";

const Internship: FC = () => {
  return (
    <section className="internship Container1">
      <h1 className="text-3xl font-bold mb-6">Internship in Beja</h1>
      <HeroSection />
      <ProjectOverview />
        <TestingSection />
        <VideoSection />
      <ProjectImages />
        <DownloadSection />
    </section>
  );
};

export default Internship;