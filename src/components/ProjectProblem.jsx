import React, { useState, useEffect } from 'react';
import './ProjectProblem.css';
import { useText } from "../hooks/useText";
import { parseForBold } from "../utils/textParser";

const ProjectProblem = ({ problem }) => {
  const t = useText;
  const [asset, setAsset] = useState({ type: null, content: null });

  useEffect(() => {
    if (!problem?.title) return;

    const projectIdMatch = problem.title.match(/^(P\d+|SIDE)_/);
    if (projectIdMatch) {
      let projectId = projectIdMatch[1].toLowerCase();
      if (projectId === 'side') projectId = 'p5';
      
      const svgFileName = `${projectId}Problem.svg`;
      fetch(`/stitch_source/${svgFileName}`)
        .then(response => {
          if (!response.ok) throw new Error();
          return response.text();
        })
        .then(svgContent => {
          setAsset({ type: 'svg', content: svgContent });
        })
        .catch(() => {
          setAsset({ type: null, content: null });
        });
    } else {
      setAsset({ type: null, content: null });
    }
  }, [problem]);

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
            {problem?.quantitative && (
            <div className="problem-block">
              <h4 className="problem-block-title">{parseForBold(t(problem?.quantitativeLabel || "PROBLEM_BLOCK_DATA"))}</h4>
              <p className="problem-block-desc">{parseForBold(t(problem?.quantitative))}</p>
            </div>
            )}
            <div className="problem-block">
              <h4 className="problem-block-title">{parseForBold(t("PROBLEM_BLOCK_VOC"))}</h4>
              <p className="problem-block-desc">{parseForBold(t(problem?.qualitative))}</p>
            </div>
          </div>
        </div>
        <div className="project-viz-column">
          {asset.content && (
            <div 
              className="project-viz-container"
              dangerouslySetInnerHTML={{ __html: asset.content }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectProblem;

