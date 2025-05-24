import React from "react";
import "@/main.css";

const DownloadSection: React.FC = () => {
  return (
    <section className="download-section">
      <h2 className="download-title">Download Traineeship Documents</h2>
      <div className="download-buttons">
        <a
          href="/assets/docs/logboek_gebundeld.pdf"
          download="LogBook.pdf"
          className="download-button"
        >
          Download LogBook
        </a>
        <a
          href="/assets/docs/sarah_janssenPresentation.pdf"
          download="Presentation.pdf"
          className="download-button"
        >
          Download Presentation
        </a>
        <a
          href="/assets/docs/FinalReport_English.pdf"
          download="Internship_Report.pdf"
          className="download-button"
        >
          Download Traineeship Report
        </a>
      </div>
    </section>
  );
};

export default DownloadSection;