import React from 'react';
import './ProjectStrategy.css';
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectStrategy = ({ strategy }) => {
  const t = useText;
  return (
    <div className="container">
      <div className="section-header">
        <h3 className="section-label">{parseForBold(t("SECTION_LABEL_STRATEGY"))}</h3>
        
        {strategy?.title && (
           <h2 className="section-title left">{parseForBold(t(strategy.title))}</h2>
        )}
      </div>


      <div className="content-grid">
        <div className="strategy-text-column">
            {/* {strategy?.description && (
                <p className="strategy-desc">{t(strategy.description)}</p>
            )} */}
            <div className="strategy-cards">
                {/* Cause Card */}
                <div className="strategy-card cause-card">
                    <h4 className="card-heading">{parseForBold(t(strategy.cause)) || "Cause"}</h4>
                    <p className="card-text">
                        {parseForBold(t(strategy.causeDesc))}
                    </p>
                </div>

                {/* Arrow */}
                <div className="strategy-arrow">→</div>

                {/* Hypothesis Card */}
                <div className="strategy-card hypothesis-card">
                    <h4 className="card-heading">가설 설정</h4>
                    <p className="card-text">
                        {parseForBold(t(strategy.hypothesis))}
                    </p>
                </div>
            </div>
        </div>
        <div className="strategy-image-column">
           {strategy?.image && (
               <img src={strategy.image} alt="Strategy" className="strategy-image" />
           )}
        </div>
      </div>
    </div>
  );
};

export default ProjectStrategy;
