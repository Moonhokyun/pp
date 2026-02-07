import React from 'react';
import './ProjectSolutionA.css';
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectSolutionA = ({ solutionA }) => {
  const t = useText;
  return (
    <div className="container solution-a-container">
       <div className="solution-a-header section-header">
            <h3 className="section-label">{parseForBold(t("SECTION_LABEL_SOLUTION_A"))}</h3>
            <h2 className="section-title center" style={{ marginBottom: '0', color: 'var(--color-text-primary)' }}>{parseForBold(t(solutionA?.title))}</h2>
            <h4 className="solution-a-summary">{parseForBold(t(solutionA?.summary))}</h4>
       </div>
       
       <div className="solution-a-wrapper">
           <div className="solution-a-image-column">
               {solutionA?.image && (
                   <img src={solutionA.image} alt="Solution A" className="solution-a-image" />
               )}
           </div>
           
           {Array.isArray(solutionA?.description) && (
               solutionA.description.map((item, index) => (
                   <div key={index} className={`solution-a-float-container solution-a-float-item-${index + 1}`}>
                       {item.title && <h4 className="solution-a-block-title">{parseForBold(t(item.title))}</h4>}
                       {item.desc && <p className="solution-a-block-desc">{parseForBold(t(item.desc))}</p>}
                   </div>
               ))
           )}
       </div>
    </div>
  );
};

export default ProjectSolutionA;
