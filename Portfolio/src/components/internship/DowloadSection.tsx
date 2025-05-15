import React from "react";
import "@/main.css";

const DownloadSection: React.FC = () => {
  return (
    <section className="download-section">
      <h2 className="download-title">Download Internship Documents</h2>
      <div className="download-buttons">
        <a
          href="/path/to/logbook.pdf"
          download="LogBook.pdf"
          className="download-button"
        >
          Download LogBook
        </a>
        <a
          href="/path/to/presentation.pdf"
          download="Presentation.pdf"
          className="download-button"
        >
          Download Presentation
        </a>
        <a
          href="/path/to/internship-report.pdf"
          download="Internship_Report.pdf"
          className="download-button"
        >
          Download Internship Report
        </a>
      </div>
    </section>
  );
};

export default DownloadSection;