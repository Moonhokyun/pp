import React from 'react';
import './ProjectStrategy.css';
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectStrategy = ({ strategy }) => {
  const t = useText;
  const [svgContent, setSvgContent] = React.useState(null);

  React.useEffect(() => {
    if (!strategy?.title) return;

    const projectIdMatch = strategy.title.match(/^(P\d+|SIDE)_/);
    if (projectIdMatch) {
      let projectId = projectIdMatch[1].toLowerCase();
      if (projectId === 'side') projectId = 'p5';
      
      const svgFileName = `${projectId}Strategy.svg`;
      fetch(`/stitch_source/${svgFileName}`)
        .then(response => {
          if (!response.ok) throw new Error();
          return response.text();
        })
        .then(content => {
          setSvgContent(content);
        })
        .catch(() => {
          setSvgContent(null);
        });
    } else {
      setSvgContent(null);
    }
  }, [strategy]);

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
        <div className="project-viz-column">
           {svgContent && (
               <div 
                 className="project-viz-container"
                 dangerouslySetInnerHTML={{ __html: svgContent }} 
               />
           )}
        </div>
      </div>
    </div>
  );
};

export default ProjectStrategy;
