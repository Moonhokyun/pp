import React from 'react';
import './ProjectImpact.css';
import { useText } from '../hooks/useText';
import { parseForBold } from '../utils/textParser';

const ProjectImpact = ({ impact }) => {
  const t = useText;

  if (!impact) return null;

  return (
    <div className="container impact-container">
      <div className="impact-content">
         <div className="section-header">
           <h3 className="section-label">{parseForBold(t("SECTION_LABEL_IMPACT"))}</h3>
           <h2 className="section-title">Impact & Outcome</h2>
         </div>
         
         <div className="impact-div">
             {/* Outcomes */}
             <div className="outcome-column">                
                <ul className="outcome-list">
                    {Array.isArray(impact.outcome) ? (
                        impact.outcome.map((item, index) => (
                            <li key={index} className="outcome-item">
                                {item.image && (
                                    <div className="outcome-image-wrapper">
                                       <img src={item.image} alt={t(item.title)} className="outcome-image" />
                                    </div>
                                )}
                                <div className="outcome-text-group">
                                    <span className="outcome-bullet">Metrics</span>
                                    <strong className="outcome-item-title">{parseForBold(t(item.title))}</strong>
                                    <p className="outcome-item-desc">{parseForBold(t(item.desc))}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className="outcome-item">
                            <p className="outcome-item-desc">{parseForBold(t(impact.outcome))}</p>
                        </li>
                    )}
                </ul>
             </div>

             {/* Lesson */}
             <div className="lesson-column">
                 <h3 className="column-label">Lesson Learned</h3>
                 <div className="lesson-box">
                    <p className="lesson-text">{parseForBold(t(impact.lesson))}</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default ProjectImpact;
