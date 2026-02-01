import React from 'react';
import './ProjectProblem.css';

const ProjectProblem = ({ problem }) => {
  return (
    <div className="container">
      <h3 className="section-label problem-label">
        1. 문제 정의 (Discovery)
      </h3>
      <div className="problem-grid">
        <div className="problem-text-column">
           <div className="problem-content-wrapper">
               <div className="problem-block">
                   <h4 className="problem-block-title">배경 (Background)</h4>
                   <p className="problem-block-desc">{problem?.background}</p>
               </div>
               <div className="problem-block">
                   <h4 className="problem-block-title">정량적 근거 (Data)</h4>
                   <p className="problem-block-desc">{problem?.quantitative}</p>
               </div>
               <div className="problem-block">
                   <h4 className="problem-block-title">정성적 근거 (VoC)</h4>
                   <p className="problem-block-desc">{problem?.qualitative}</p>
               </div>
           </div>
        </div>
        <div className="problem-image-column">
           {problem?.image && (
               <img src={problem.image} alt="Problem" className="problem-image" />
           )}
        </div>
      </div>
    </div>
  );
};

export default ProjectProblem;
