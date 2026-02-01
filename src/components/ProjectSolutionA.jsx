import React from 'react';
import './ProjectSolutionA.css';

const ProjectSolutionA = ({ solutionA }) => {
  return (
    <div className="container solution-a-container">
       <h3 className="section-label">3. 핵심 솔루션 (Solution A)</h3>
       
       <div className="solution-a-header">
           <h2 className="solution-a-title">{solutionA?.title}</h2>
           <p className="solution-a-desc">{solutionA?.description}</p>
       </div>
       
       <div className="solution-a-image-wrapper">
           {/* Image Placeholder or Actual Image */}
           {solutionA?.image && !solutionA.image.includes("png") && !solutionA.image.includes("jpg") ? (
               <span className="solution-a-placeholder">{solutionA.image}</span>
           ) : (
               <img src={solutionA?.image} alt="Solution A" className="solution-a-image" />
           )}
       </div>
    </div>
  );
};

export default ProjectSolutionA;
