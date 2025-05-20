import React from "react";
import HeaderSection from "@/components/contact/HeaderSection";
import ProfessionalBackground from "@/components/contact/ProfessionalBackground";
import SocialMediaLinks from "@/components/contact/SocialMediaLinks";
import ContactInfo from '@/components/contact/Contactinfo.tsx'



const Contact: React.FC = () => {
  return (
    <div className="contact-page py-12">
      <div className="sectionContainer2 mx-auto px-6">
        <HeaderSection />
        <div className="card grid grid-cols-1 md:grid-cols-2 gap-12">
          <ProfessionalBackground />
          <SocialMediaLinks />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;