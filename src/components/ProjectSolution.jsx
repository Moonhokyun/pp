import React from 'react';
import './ProjectSolution.css'; // Shared CSS

const ProjectSolution = ({ title, subtitle, asis, tobe }) => {
  return (
    <div className="container solution-container">
      {/* Header Area */}
      <div className="solution-header">
        <h3 className="section-label">3. 솔루션 (Solution)</h3>
        <div className="heading-group">
           <h2 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 24px 0', lineHeight: '1.2', color: '#222' }}>
             {title || "Solution Title"}
           </h2>
           <p className="solution-c-text" style={{ fontSize: '20px', color: '#666', lineHeight: '1.6', margin: '0' }}>
             {subtitle || "Solution Subtitle"}
           </p>
        </div>
      </div>

      {/* Monitor Frame (Dual View) */}
      <div className="monitor-frame">
          {/* AS-IS (Left) */}
          <div className="vis-half vis-asis">
              <div className="vis-label">AS-IS</div>
              <div className="vis-content">
                  <div className="mock-img-placeholder grayscale">
                     <span>{asis?.image ? "AS-IS Image" : "AS-IS Image"}</span>
                     {asis?.image && <code style={{position:'absolute', bottom: '10px', fontSize: '0.8rem'}}>{asis.image}</code>}
                  </div>
                  {/* Annotation */}
                  <div className="annotation anno-asis">
                     <span className="anno-tag">Problem</span>
                     <p>{asis?.annotationDesc || "Problem Description"}</p>
                  </div>
              </div>
          </div>

          {/* Divider */}
          <div className="vis-divider">
             <span>VS</span>
          </div>

          {/* TO-BE (Right) */}
          <div className="vis-half vis-tobe">
              <div className="vis-label">TO-BE</div>
              <div className="vis-content">
                  <div className="mock-img-placeholder highlight">
                     <span>{tobe?.image ? "TO-BE Image" : "TO-BE Image"}</span>
                     {tobe?.image && <code style={{position:'absolute', bottom: '10px', fontSize: '0.8rem'}}>{tobe.image}</code>}
                  </div>
                  {/* Annotation */}
                  <div className="annotation anno-tobe">
                     <span className="anno-tag">Solved</span>
                     <p>{tobe?.annotationDesc || "Solution Description"}</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ProjectSolution;
