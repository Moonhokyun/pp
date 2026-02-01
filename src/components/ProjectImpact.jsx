import React from 'react';
import './ProjectImpact.css';

const ProjectImpact = ({ impact }) => {
  return (
    <div className="container impact-container">
      <h3 className="section-label">5. 성과 및 교훈 (Impact & Lesson)</h3>
      <div className="impact-content">
        <h2 className="impact-outcome">
          {impact?.outcome}
        </h2>
        <div className="lesson-box">
             <h4 className="lesson-label">Lesson Learned</h4>
             <p className="lesson-text">
               "{impact?.lesson}"
             </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectImpact;
