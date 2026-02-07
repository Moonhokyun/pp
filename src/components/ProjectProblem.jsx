import React from 'react';
import './ProjectProblem.css';
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectProblem = ({ problem }) => {
  const t = useText;
  return (
    <div className="container">
      <div className="section-header">
        <h3 className="section-label">
          {parseForBold(t("SECTION_LABEL_PROBLEM"))}
        </h3>
        {problem?.title && (
          <h2 className="section-title left">{parseForBold(t(problem.title))}</h2>
        )}
      </div>
      <div className="content-grid">
        <div className="problem-text-column">
           <div className="problem-content-wrapper">
               <div className="problem-block">
                   <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_BACKGROUND"))}</h4>
                   <p className="problem-block-desc">{parseForBold(t(problem?.background))}</p>
               </div>
               <div className="problem-block">
                   <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_DATA"))}</h4>
                   <p className="problem-block-desc">{parseForBold(t(problem?.quantitative))}</p>
               </div>
               <div className="problem-block">
                   <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_VOC"))}</h4>
                   <p className="problem-block-desc">{parseForBold(t(problem?.qualitative))}</p>
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

