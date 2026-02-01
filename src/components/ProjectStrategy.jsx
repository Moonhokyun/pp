import React from 'react';
import './ProjectStrategy.css';

const ProjectStrategy = ({ strategy }) => {
  return (
    <div className="container strategy-container">
      <h3 className="section-label">2. 전략 및 가설 (Strategy & Hypothesis)</h3>
      
      <div className="strategy-content">
        <div className="strategy-header">
           <h2 className="strategy-title">
             {strategy.title || "Strategy Title"}
           </h2>
           <p className="strategy-desc">
             {strategy.description}
           </p>
        </div>

        <div className="strategy-cards">
            {/* Framework Card */}
            <div className="strategy-card framework-card">
                <div className="card-label">Framework</div>
                <h4 className="card-heading">{strategy.framework || "Strategy Name"}</h4>
                <p className="card-text">
                    {strategy.frameworkDesc}
                </p>
            </div>

            {/* Arrow */}
            <div className="strategy-arrow">→</div>

            {/* Hypothesis Card */}
            <div className="strategy-card hypothesis-card">
                <div className="card-label">Hypothesis</div>
                <h4 className="card-heading">가설 설정</h4>
                <p className="card-text">
                    {strategy.hypothesis}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStrategy;
