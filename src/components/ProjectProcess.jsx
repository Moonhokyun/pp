import React from 'react';
import './ProjectHistory.css'; // Shared CSS

const ProjectProcess = ({ title, steps }) => {
  return (
    <div className="container history-layout">
         {/* Title area */}
         <h3 className="section-label">
            4. 히스토리 (History & Process)
         </h3>

         <div className="history-content">
             <div className="history-header">
                 <h2>
                    {title}
                 </h2>
             </div>

             {/* History Timeline */}
             <div className="history-card-container">
                {steps.map((step, index) => (
                  <div key={index} className="history-card">
                    <div className="history-label-large">{step.label}</div>
                    
                    {/* Image Area Marker */}
                    <div className="history-image-large" style={{ marginBottom: '24px', backgroundColor: '#f0f0f0', border: '2px dashed #ccc' }}>
                        <span style={{ color: '#aaa' }}>Image Area</span>
                    </div>
                    
                    <p className="history-desc">
                      {step.content}
                    </p>
                  </div>
                ))}
             </div>
         </div>
    </div>
  );
};

export default ProjectProcess;
