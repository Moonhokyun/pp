import React from 'react';
import './ProjectSolution.css'; // Shared CSS
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectSolution = ({ title, subtitle, asis, tobe, sectionTitle, image }) => {
  const t = useText;
  return (
    <div className="container solution-container">
      {/* Header Area */}
      <div className="solution-header section-header">
        <h3 className="section-label">{sectionTitle || parseForBold(t("SECTION_LABEL_SOLUTION_B"))}</h3>
        
        <h2 className="section-title center">
            {parseForBold(t(title)) || "Solution Title"}
        </h2>
        
        {!Array.isArray(subtitle) && (
            <p className="solution-c-text">
                {parseForBold(t(subtitle)) || "Solution Subtitle"}
            </p>
        )}
      </div>

      {/* Solution B Image Area */}
      <div className="solution-b-grid">
         <div className="solution-b-image-column">
             {image && (
                 <img src={image} alt="Solution B" className="solution-b-image" />
              )}
          </div>
         
         {/* Floating Descriptions (Solution B) */}
         {Array.isArray(subtitle) && subtitle.map((item, index) => (
             <div key={index} className={`sol-b-float-container sol-b-float-item-${index + 1}`}>
                 {item.title && <h4 className="sol-b-block-title">{parseForBold(t(item.title))}</h4>}
                 {item.desc && <p className="sol-b-block-desc">{parseForBold(t(item.desc))}</p>}
             </div>
         ))}
      </div>
    </div>
  );
};

export default ProjectSolution;
