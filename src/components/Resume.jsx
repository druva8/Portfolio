import React from "react";
import "../index.css";

const Resume = () => {
  const resumePath = "/assets/Resume-.pdf";

  return (
    <div className="resume-container">
      <h2 className="resume-heading" style={{ color: "yellow" }}>
        📄 My Resume
      </h2>

      <iframe
        src={resumePath}
        className="resume-frame"
        title="Resume Preview"
      />

      <a href={resumePath} download="druva_resume.pdf" className="download-btn">
        ⬇ Download Resume
      </a>
    </div>
  );
};

export default Resume;
